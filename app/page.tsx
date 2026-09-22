import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "CSE 341 Final Project API",
    description: "A full REST API built with Node.js, Express, MongoDB, and Swagger documentation.",
    technologies: ["Node.js", "Express", "MongoDB", "Swagger", "TypeScript"],
    link: "https://github.com/Kelwood22/cse341-finalproject"
  },
  {
    title: "Next.js Portfolio",
    description: "A personal portfolio built using the App Router, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Kelwood22/wdd430-portfolio"
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}
