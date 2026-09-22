import ProjectSearch from '@/app/ui/ProjectSearch';
import Pagination from '@/app/ui/Pagination';
import { deleteProject } from '@/lib/actions';

import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from '@/lib/projects-db';

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;

  const query = params?.query ?? '';
  const currentPage =
    Number(params?.page) || 1;

  const projects =
    await fetchFilteredProjects(
      query,
      currentPage
    );

  const totalPages =
    await fetchProjectsPages(query);

  return (
    <main className="mx-auto max-w-4xl px-6 py-8">
      <h1 className="mb-6 text-3xl font-bold text-slate-800">Projects Overview</h1>
      <div className="mb-6">
        <ProjectSearch />
      </div>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id}
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <span>{project.title}</span>

            <form action={deleteProject.bind(null, project.id)}>
              <button type="submit"
                className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700">
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
      
      <div className="mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>

      <p className="mt-4-sm text-slate-500">
        Total Pages: {totalPages}
      </p>
    </main>
  );
}

