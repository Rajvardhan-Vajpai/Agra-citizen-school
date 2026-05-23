import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const noticeSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  type: z
    .enum(["important", "tender", "result", "holiday", "general"])
    .default("general"),
  priority: z.number().default(0),
  expiryDate: z.coerce.date().optional(),
  published: z.boolean().default(false),
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type");
    const published = searchParams.get("published") === "true";

    const notices = await prisma.notice.findMany({
      where: {
        ...(type && { type }),
        ...(published && { published: true }),
        OR: [
          { expiryDate: null },
          { expiryDate: { gte: new Date() } },
        ],
      },
      orderBy: { priority: "desc" },
      take: 50,
    });

    return NextResponse.json({ notices }, { status: 200 });
  } catch (error) {
    console.error("Error fetching notices:", error);
    return NextResponse.json(
      { error: "Failed to fetch notices" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // TODO: Add authentication check for admin
    const data = await request.json();
    const validatedData = noticeSchema.parse(data);

    const notice = await prisma.notice.create({
      data: validatedData,
    });

    return NextResponse.json(
      { success: true, notice },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating notice:", error);
    return NextResponse.json(
      { error: "Failed to create notice" },
      { status: 500 }
    );
  }
}
