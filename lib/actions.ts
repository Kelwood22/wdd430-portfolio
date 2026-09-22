'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    yearCompleted?: string[];
  };
  message?: string | null;
};

const ProjectFormSchema = z.object({
    title: z.string().min(2),
    description: z.string().min(10),
    type: z.enum(['opensource', 'school']),
    technologies: z.string().min(2),
    link: z.string().optional(),
    yearCompleted: z.coerce
        .number()
        .int()
        .gte(2000)
        .lte(new Date().getFullYear()),
});

export async function createProject(prevState: State,
formData: FormData): Promise<State | void> {
  const rawData = {
    title: formData.get('title'),
    description: formData.get('description'),
    type: formData.get('type'),
    technologies: formData.get('technologies'),
    link: formData.get('link') || '',
    yearCompleted: formData.get('yearCompleted'),
  };

  const parsed = ProjectFormSchema.safeParse(rawData);
    
  if (!parsed.success) {
  return {
    errors: parsed.error.flatten().fieldErrors,
    message: 'Missing or invalid fields.',
  };
}

  const {
    title,
    description,
    type,
    technologies,
    link,
    yearCompleted,
    } = parsed.data;
    
    const technologiesArray = technologies
  .split(',')
  .map((t) => t.trim());

const technologiesValue = `{${technologiesArray.join(',')}}`;

await sql`
  INSERT INTO projects
    (title, description, type, technologies, link, yearCompleted)
  VALUES
    (
      ${title},
      ${description},
      ${type},
      ${technologiesValue},
      ${link},
      ${yearCompleted}
    )
`;

  revalidatePath('/projects');
  redirect('/projects');
}

export async function updateProject(
  id: string,
  formData: FormData
) {
  const rawData = {
    title: formData.get('title'),
    description: formData.get('description'),
    type: formData.get('type'),
    technologies: formData.get('technologies'),
    link: formData.get('link') || '',
    yearCompleted: formData.get('yearCompleted'),
  };

  const parsed = ProjectFormSchema.safeParse(rawData);

  if (!parsed.success) {
    throw new Error('Invalid project data');
  }

  const {
    title,
    description,
    type,
    technologies,
    link,
    yearCompleted,
  } = parsed.data;

  const technologiesArray = technologies
    .split(',')
    .map((t) => t.trim());

  const technologiesValue =
    `{${technologiesArray.join(',')}}`;

  try {
    await sql`
    UPDATE projects
    SET
      title = ${title},
      description = ${description},
      type = ${type},
      technologies = ${technologiesValue},
      link = ${link},
      yearCompleted = ${yearCompleted}
    WHERE id = ${id}
  `;

  revalidatePath('/projects');
      redirect('/projects');
  } catch (error) {
    console.error('Failed to update project:', error);
    throw new Error('Failed to update project');
  }
}

export async function deleteProject(id: number) {
    try {
        await sql`
    DELETE FROM projects
    WHERE id = ${id}
  `;

        revalidatePath('/projects');
    } catch (error) {
        console.error('Failed to delete project:', error);
    
        throw new Error('Failed to delete project');
    }
}