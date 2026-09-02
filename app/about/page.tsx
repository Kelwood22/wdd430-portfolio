import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>

      <p className="text-lg text-gray-800 mb-8">
        Hi! I'm Kelsey Woodland, a full-stack developer learning Next.js, React, and modern web development.
        I enjoy building clean, organized projects and helping teams collaborate effectively.
      </p>

      <section className="grid gap-6 md:grid-cols-2">
        <SkillCard skill="Next.js" level="Beginner" />
        <SkillCard skill="TypeScript" level="Beginner" />
        <SkillCard skill="Tailwind CSS" level="Beginner" />
        <SkillCard skill="Node.js & Express" level="Intermediate" />
      </section>
    </main>
  );
}

