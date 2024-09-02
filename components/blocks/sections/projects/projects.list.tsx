import { ProjectItem } from "./project.item";

import { Project, PROJECTS_QUERYResult } from "@/sanity.types";

export async function ProjectList({
  className,
  projects,
}: {
  className?: string;
  projects: PROJECTS_QUERYResult;
}) {
  return (
    <div className="mx-auto grid  sm:grid-cols-2 lg:grid-cols-3">
      {projects?.map((project, index) => (
        <ProjectItem project={project as Project} key={index} />
      ))}
    </div>
  );
}
