import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <Link href="/projects">Projects Home</Link>
        {" | "}
        <Link href="/projects/opensource">Open Source</Link>
        {" | "}
        <Link href="/projects/school">School</Link>
      </nav>

      <hr />

      {children}
    </div>
  );
}