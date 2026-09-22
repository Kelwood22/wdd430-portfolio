import { createProject } from '@/lib/actions';

export default function CreateProjectPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
<div className="rounded-lg bg-white p-8 shadow-md">
<h1 className="mb-6 text-3xl font-bold text-slate-800">
Create Project
</h1>

      <form action={createProject}>
        <div>
            <label htmlFor="title"
                className="mb-2 block text-sm font-medium text-slate-700">Title</label>
          <input
            id="title"
            name="title"
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
            <label htmlFor="description"
                className="mb-2 block text-sm font-medium text-slate-700">Description</label>
          <textarea
            id="description"
            name="description"
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label htmlFor="type"
                className="mb-2 block text-sm font-medium text-slate-700">Type</label>

          <select
            id="type"
            name="type"
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="school">School</option>
            <option value="opensource">Open Source</option>
          </select>
        </div>

        <div>
          <label htmlFor="technologies"
                className="mb-2 block text-sm font-medium text-slate-700">Technologies</label>

          <input
            id="technologies"
            name="technologies"
            placeholder="Next.js, TypeScript, PostgreSQL"
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label htmlFor="link"
                className="mb-2 block text-sm font-medium text-slate-700">Project Link</label>

          <input
            id="link"
            name="link"
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button type="submit"
          className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Save Project
        </button>
      </form>
</div>
    </main>
  );
}
