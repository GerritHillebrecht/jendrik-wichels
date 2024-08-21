import Ripple from "@/components/magicui/ripple";
import ShineBorder from "@/components/magicui/shine-border";
import { Badge } from "@/components/ui/badge";
import { PROJECT_QUERYResult, PROJECTS_QUERYResult } from "@/sanity.types";
import { client, sanityFetch } from "@/sanity/lib/client";
import { PROJECT_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { QueryParams } from "sanity";
import { AnimatedBeamDemo } from "../_components/beam.video";
import { VideoDock } from "../_components/dock.video";

export async function generateStaticParams() {
  const projects = await client.fetch<PROJECTS_QUERYResult>(
    PROJECTS_QUERY,
    {},
    { perspective: "published" }
  );

  return projects.map((project) => ({
    slug: project?.slug?.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const project = await sanityFetch<PROJECT_QUERYResult>({
    query: PROJECT_QUERY,
    params,
  });

  return (
    <section className="p-4">
      <div className="max-w-7xl mx-auto">
        {project && (
          <>
            <Link href="/projects" className="">
              <Badge
                className="w-fit text-white text-xs flex items-center gap-x-1"
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Alle Projekte</span>
              </Badge>
            </Link>
            <h1 className="text-4xl leading-relaxed mt-2 mb-4">{project.title}</h1>
            <div className="aspect-video border rounded-xl shadow relative bg-background">
              <ShineBorder
                className="absolute inset-0 w-full h-full bg-transparent"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <Ripple />
                <div className="absolute inset-4">
                  <video
                    autoPlay
                    muted
                    controls
                    controlsList="nodownload"
                    className="absolute w-full h-full object-cover rounded-md border shadow"
                  >
                    <source src={project.video!} type="video/mp4" />
                  </video>
                </div>
              </ShineBorder>
            </div>
          </>
        )}
        <div className="max-w-7xl mx-auto py-20">
          <AnimatedBeamDemo />
        </div>
      </div>
      <VideoDock />
    </section>
  );
}
