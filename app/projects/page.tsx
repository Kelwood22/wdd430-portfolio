import ProjectSearch from '@/app/ui/ProjectSearch';
import Pagination from '@/app/ui/Pagination';

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
    <main>
      <h1>Projects Overview</h1>

      <ProjectSearch />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.title}
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <p>Total Pages: {totalPages}</p>
    </main>
  );
}

