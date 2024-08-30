import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectItem } from "./project.item";

import DotPattern from "@/components/magicui/dot-pattern";
import {
  Project,
  PROJECTS_QUERYResult
} from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export async function ProjectsSection({ className }: { className?: string }) {
  const projects = await sanityFetch<PROJECTS_QUERYResult>({
    query: PROJECTS_QUERY,
  });

  return (
    <section
      id="projects"
      className={cn("w-full py-12 md:py-16 relative", className)}
    >
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]"
        )}
      />
      {/* <div className={cn("absolute inset-0", styles.projects)}></div> */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-80">
              Watch my work
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent video projects and see how I can bring
              your vision to life.
            </p>
          </div>
        </div>
        <div className="mx-auto grid py-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project, index) => (
            <ProjectItem project={project as Project} key={index} />
          ))}
        </div>
        <Link href="/projects" className={buttonVariants({ variant: "link" })}>
          Alle Projekte
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
