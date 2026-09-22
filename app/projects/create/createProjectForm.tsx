'use client';

import { useActionState } from 'react';
import { createProject, type State } from '@/lib/actions';

const initialState: State = {
  message: null,
  errors: {},
};

export default function CreateProjectForm() {
  const [state, formAction, isPending] =
    useActionState(
      createProject,
      initialState
    );

  return (
    <form action={formAction}>
        <div>
            <label htmlFor="title"
                className="mb-2 block text-sm font-medium text-slate-700">Title</label>
          <input
            id="title"
            name="title"
            required
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <div
                  id="title-error"
                  aria-live="polite">
                  {state.errors?.title?.map((error) => (
                    <p key={error} className="mt-1 text-sm text-red-600">{error}</p>    
                ))}
              </div>
        </div>

        <div>
            <label htmlFor="description"
                className="mb-2 block text-sm font-medium text-slate-700">Description</label>
          <textarea
            id="description"
            name="description"
            required
            aria-describedby="description-error"
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
              <div
                  id="description-error"
                  aria-live="polite">
                  {state.errors?.description?.map((error) => (
                    <p key={error} className="mt-1 text-sm text-red-600">{error}</p>    
                ))}
              </div>
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
            aria-describedby="technologies-error"
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
              <div
                  id="technologies-error"
                  aria-live="polite">
                  {state.errors?.technologies?.map((error) => (
                    <p key={error} className="mt-1 text-sm text-red-600">{error}</p>    
                ))}
              </div>
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
          
        <div>
          <label htmlFor="yearCompleted"
            className="mb-2 block text-sm font-medium text-slate-700">
            Year Completed
          </label>

          <input
            id="yearCompleted"
            name="yearCompleted"
            type="number"
            min="2000"
            max={new Date().getFullYear()}
            required
            aria-describedby="yearCompleted-error"
            className="w-full rounded-md border border-slate-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <div
              id="yearCompleted-error"
              aria-live="polite">
              {state.errors?.yearCompleted?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">{error}</p>    
            ))}
          </div>
          </div>
          
          {state.message ? (
            <p className="text-sm text-red-600">
            {state.message}
            </p>
            ) : null}

          <button type="submit"
              disabled={isPending}
          className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50" >
          {isPending ? 'Saving...' : 'Save Project'}
        </button>
      </form>
  );
}