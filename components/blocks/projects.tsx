import { Tables } from "@/types/supabase";
import { ProjectItem } from "./project";

export function Projects({
  projects,
}: {
  projects: Tables<"projects">[] | null;
}) {
  return (
    <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3">
      {projects?.map((project, index) => (
        <ProjectItem project={project} key={index} />
      ))}
    </div>
  );
}
