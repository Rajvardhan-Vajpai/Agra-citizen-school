import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const alumniSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  passingYear: z.number().int().min(1900, "Invalid year"),
  profession: z.string().optional(),
  company: z.string().optional(),
  location: z.string().optional(),
  bio: z.string().optional(),
  imageUrl: z.string().url().optional(),
  linkedinUrl: z.string().url().optional(),
  active: z.boolean().default(true),
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const passingYear = searchParams.get("passingYear");
    const active = searchParams.get("active") === "true";

    const alumni = await prisma.alumni.findMany({
      where: {
        ...(passingYear && { passingYear: parseInt(passingYear) }),
        ...(searchParams.has("active") && { active }),
      },
      orderBy: { passingYear: "desc" },
      take: 100,
    });

    return NextResponse.json({ alumni }, { status: 200 });
  } catch (error) {
    console.error("Error fetching alumni:", error);
    return NextResponse.json(
      { error: "Failed to fetch alumni" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const validatedData = alumniSchema.parse(data);

    const existingAlumni = await prisma.alumni.findUnique({
      where: { email: validatedData.email },
    });

    if (existingAlumni) {
      return NextResponse.json(
        { error: "Alumni with this email already exists" },
        { status: 400 }
      );
    }

    const alumni = await prisma.alumni.create({
      data: validatedData,
    });

    return NextResponse.json(
      { success: true, alumni },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating alumni:", error);
    return NextResponse.json(
      { error: "Failed to create alumni" },
      { status: 500 }
    );
  }
}
