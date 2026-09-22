import { getProjectById } from '@/lib/projects-db';
import { updateProject } from '@/lib/actions';
import { deleteProject } from '@/lib/actions';

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
    return <p>Project not found.</p>;
  }

  return (
    <main>
      <h1>Edit Project</h1>

      <form action={updateProjectWithId}>
        <div>
            <label htmlFor="title">Title</label>
            <input
                id="title"
                name="title"
                defaultValue={project.title}
                required
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
            />
        </div>
        
        <div>
            <label htmlFor="link">Link</label>

            <input
                id="link"
                name="link"
                defaultValue={project.link ?? ''}
            />
        </div>

        <button type="submit">
            Save Changes
        </button>
      </form>
    </main>
  );
}