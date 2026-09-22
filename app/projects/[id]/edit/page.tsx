import { getProjectById } from '@/lib/projects-db';
import { updateProject } from '@/lib/actions';
import { notFound } from 'next/navigation';

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await getProjectById(
    Number(id)
    );
    
    const updateProjectWithId =
  updateProject.bind(null, id);


  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-8">
      <h1 className="mb-8 text-3xl font-bold text-slate-900">Edit Project</h1>

          <form action={updateProjectWithId}
          className="space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
        <div>
            <label htmlFor="title">Title</label>
            <input
                id="title"
                name="title"
                defaultValue={project.title}
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
        </div>

        <div>
            <label htmlFor="description">
                Description
            </label>

            <textarea
                id="description"
                name="description"
                defaultValue={project.description}
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
        </div>
              
        <div>
            <label htmlFor="type">Type</label>

            <select
                id="type"
                name="type"
                defaultValue={project.type}
                required
            >
                <option value="school">School</option>
                <option value="opensource">
                    Open Source
                </option>
            </select>
        </div>
              
        <div>
            <label htmlFor="technologies">
                Technologies
            </label>

            <input
                id="technologies"
                name="technologies"
                defaultValue={project.technologies.join(', ')}
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
        </div>
        
        <div>
            <label htmlFor="link">Link</label>

            <input
                id="link"
                name="link"
                defaultValue={project.link ?? ''}
                className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
        </div>

        <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        >   
            Save Changes
        </button>
      </form>
    </main>
  );
}