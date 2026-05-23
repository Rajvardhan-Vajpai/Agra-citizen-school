import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const studentSchema = z.object({
  rollNumber: z.string().min(1, "Roll number is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  class: z.string().min(1, "Class is required"),
  parentEmail: z.string().email("Invalid parent email"),
  parentPhone: z.string().min(10, "Invalid parent phone number"),
  dateOfBirth: z.coerce.date().optional(),
  address: z.string().optional(),
  active: z.boolean().default(true),
});

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const studentClass = searchParams.get("class");
    const active = searchParams.get("active") === "true";

    const students = await prisma.student.findMany({
      where: {
        ...(studentClass && { class: studentClass }),
        ...(searchParams.has("active") && { active }),
      },
      orderBy: { rollNumber: "asc" },
      take: 100,
    });

    return NextResponse.json({ students }, { status: 200 });
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { error: "Failed to fetch students" },
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
    const validatedData = studentSchema.parse(data);

    const existingStudent = await prisma.student.findUnique({
      where: { rollNumber: validatedData.rollNumber },
    });

    if (existingStudent) {
      return NextResponse.json(
        { error: "Student with this roll number already exists" },
        { status: 400 }
      );
    }

    const student = await prisma.student.create({
      data: validatedData,
    });

    return NextResponse.json(
      { success: true, student },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating student:", error);
    return NextResponse.json(
      { error: "Failed to create student" },
      { status: 500 }
    );
  }
}
