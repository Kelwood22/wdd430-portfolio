import { getProjectById } from "@/lib/projects-db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

const numericId = Number(id);

if (Number.isNaN(numericId)) {
  return NextResponse.json(
    { error: "Invalid id" },
    { status: 400 }
  );
    }

    const project = await getProjectById(numericId);

if (!project) {
  return NextResponse.json(
    { error: "Not found" },
    { status: 404 }
  );
}

return NextResponse.json(project);
}