'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ProjectFormSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  type: z.enum(['opensource', 'school']),
  technologies: z.string().min(2),
  link: z.string().optional(),
});

export async function createProject(formData: FormData) {
  const rawData = {
    title: formData.get('title'),
    description: formData.get('description'),
    type: formData.get('type'),
    technologies: formData.get('technologies'),
    link: formData.get('link') || '',
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
    } = parsed.data;
    
    const technologiesArray = technologies
  .split(',')
  .map((t) => t.trim());

const technologiesValue = `{${technologiesArray.join(',')}}`;

await sql`
  INSERT INTO projects
    (title, description, type, technologies, link)
  VALUES
    (
      ${title},
      ${description},
      ${type},
      ${technologiesValue},
      ${link}
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
  } = parsed.data;

  const technologiesArray = technologies
    .split(',')
    .map((t) => t.trim());

  const technologiesValue =
    `{${technologiesArray.join(',')}}`;

  await sql`
    UPDATE projects
    SET
      title = ${title},
      description = ${description},
      type = ${type},
      technologies = ${technologiesValue},
      link = ${link}
    WHERE id = ${id}
  `;

  revalidatePath('/projects');
  redirect('/projects');
}

export async function deleteProject(id: number) {
  await sql`
    DELETE FROM projects
    WHERE id = ${id}
  `;

  revalidatePath('/projects');
}