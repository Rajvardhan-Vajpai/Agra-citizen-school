import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const gallerySchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  imageUrl: z.string().url("Invalid image URL"),
  category: z
    .enum(["events", "academics", "sports", "facilities", "general"])
    .default("general"),
  published: z.boolean().default(false),
  order: z.number().default(0),
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const published = searchParams.get("published") === "true";

    const gallery = await prisma.gallery.findMany({
      where: {
        ...(category && { category }),
        ...(published && { published: true }),
      },
      orderBy: { order: "asc" },
      take: 100,
    });

    return NextResponse.json({ gallery }, { status: 200 });
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // TODO: Add authentication check for admin
    const data = await request.json();
    const validatedData = gallerySchema.parse(data);

    const item = await prisma.gallery.create({
      data: validatedData,
    });

    return NextResponse.json(
      { success: true, item },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Error creating gallery item:", error);
    return NextResponse.json(
      { error: "Failed to create gallery item" },
      { status: 500 }
    );
  }
}
