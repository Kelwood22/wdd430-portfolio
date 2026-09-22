import { createProject } from '@/lib/actions';

export default function CreateProjectPage() {
  return (
    <main>
      <h1>Create Project</h1>

      <form action={createProject}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            required
          />
        </div>

        <div>
          <label htmlFor="type">Type</label>

          <select
            id="type"
            name="type"
            required
          >
            <option value="school">School</option>
            <option value="opensource">Open Source</option>
          </select>
        </div>

        <div>
          <label htmlFor="technologies">
            Technologies
          </label>

          <input
            id="technologies"
            name="technologies"
            placeholder="Next.js, TypeScript, PostgreSQL"
            required
          />
        </div>

        <div>
          <label htmlFor="link">
            Project Link
          </label>

          <input
            id="link"
            name="link"
          />
        </div>

        <button type="submit">
          Save Project
        </button>
      </form>
    </main>
  );
}
