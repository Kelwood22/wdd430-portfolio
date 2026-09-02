interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-4 border-l-4 border-blue-900 bg-gray-200 rounded-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-800 mb-3">{description}</p>

      <p className="text-sm text-gray-800">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>

      {link && (
        <p className="mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            View Project
          </a>
        </p>
      )}
    </article>
  );
}
