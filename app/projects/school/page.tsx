import { Suspense } from "react";
import SchoolProjectList from "@/app/ui/SchoolProjectList";
import ProjectSkeleton from "@/app/ui/ProjectSkeleton";

export default function SchoolPage() {
  return (
    <main>
      <h1>School Projects</h1>

      <Suspense fallback={<ProjectSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}