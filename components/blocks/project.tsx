"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Tables } from "@/types/supabase";

export function ProjectItem({ project }: { project: Tables<"projects"> }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isHovered]);

  return (
    <Link href={`/video/${project.id}`}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="rounded-xl overflow-hidden hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
      >
        <video ref={videoRef} className="aspect-video object-cover"  muted>
          <source src={project.thumbnail_url}></source>
        </video>
        <div className="bg-background p-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground line-clamp-2">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
