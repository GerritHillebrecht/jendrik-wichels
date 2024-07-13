import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { ChevronLeft, Tv } from "lucide-react";
import Link from "next/link";

export default async function VideoPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = createClient();
  const { slug } = params;

  const { data: project } = await client
    .from("projects")
    .select()
    .eq("id", slug)
    .single();

  return (
    <section className="relative">
      <div className="video-section relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/60 z-10"></div>
        <div className="absolute top-4 left-4 z-20">
          <Link className="flex items-center gap-x-2 text-white" href="/">
            <ChevronLeft />
            Projekte
          </Link>
        </div>
        <video
          className="relative h-[calc(100vh_-_4rem)] w-full object-cover"
          autoPlay
          controls
          muted
          poster="/placeholder.svg"
        >
          <source src={project?.video_url} type="video/mp4" />
        </video>

        <div className="absolute bottom-0 left-0 p-10 z-20 text-white">
          <div className="editorial flex flex-col gap-3">
            <div className="badges flex items-center gap-2">
              <Badge className="w-fit text-white text-xs" variant="outline">
                ULTRA HD
              </Badge>
              <Badge className="w-fit text-white text-xs" variant="outline">
                DRONE
              </Badge>
            </div>
            <h1 className="font-black text-5xl">{project?.title}</h1>
            <p className="line-clamp-2 opacity-80">{project?.description}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl py-14 grid grid-cols-[5fr,3fr] gap-8 relative">
        <div className="content">
          <p>{project?.description}</p>
        </div>
        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>{project?.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {project?.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
