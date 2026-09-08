import { getProjectById } from "@/lib/projects-db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

const numericId = Number(id);

if (Number.isNaN(numericId)) {
  return Response.json(
    { error: "Invalid id" },
    { status: 400 }
  );
    }

    const project = getProjectById(numericId);

if (!project) {
  return Response.json(
    { error: "Not found" },
    { status: 404 }
  );
}

return Response.json(project);
}