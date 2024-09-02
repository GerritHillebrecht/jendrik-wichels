import { ProjectList } from "@/components/blocks/sections/projects/projects.list";
import DotPattern from "@/components/magicui/dot-pattern";
import { FadeText } from "@/components/magicui/fade-text";
import { cn } from "@/lib/utils";
import { PROJECTS_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const projects = await sanityFetch<PROJECTS_QUERYResult>({
    query: PROJECTS_QUERY,
  });

  return (
    <section className="relative py-20">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]"
        )}
      />
      <div className="text-center max-w-7xl mx-auto">
        <FadeText
          className="bg-gradient-to-br whitespace-pre-wrap from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.2, duration: 0.5 } },
          }}
          text="Meine Projekte"
        />
      </div>
      <ProjectList projects={projects} className="" />
    </section>
  );
}
