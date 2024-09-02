import { PROJECTS_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ProjectList } from "./projects/projects.list";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
              Auswahl meiner aktuellen Projekte.
            </p>
          </div>
        </div>
        <ProjectList projects={projects} />
        <Link href="/projects" className={buttonVariants({ variant: "link" })}>
          Alle Projekte
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}
