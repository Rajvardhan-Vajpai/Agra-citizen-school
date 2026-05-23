import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Rate limiting check
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }

  if (record.count >= 5) {
    return false; // Max 5 requests per minute
  }

  record.count++;
  return true;
}

const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  parent: z.string().min(1, "Parent name is required"),
  phone: z.string().min(10, "Invalid phone number"),
  email: z.string().email("Invalid email"),
  className: z.string().min(1, "Class information is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type InquiryRequest = z.infer<typeof inquirySchema>;

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await request.json();

    // Validate request data
    const validatedData = inquirySchema.parse(data);

    // Save to database - map form fields to database fields
    const inquiry = await prisma.inquiry.create({
      data: {
        firstName: validatedData.name,
        lastName: validatedData.parent, // Parent name
        email: validatedData.email,
        phone: validatedData.phone,
        subject: `Admission Inquiry - Class ${validatedData.className}`,
        message: validatedData.message,
        status: "pending",
      },
    });

    // TODO: Send email notification using Resend
    // const res = await resend.emails.send({...});

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully",
        id: inquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Inquiry error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ inquiries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
