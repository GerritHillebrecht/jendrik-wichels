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
      <div className="group hover:scale-105 transition-all duration-300 border rounded-xl p-4 hover:shadow-lg backdrop-blur-[2px] backdrop-saturate-150">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative overflow-hidden rounded-[6px] group- transition-shadow duration-300"
        >
          <video
            ref={videoRef}
            className="aspect-video object-cover"
            controlsList="nodownload"
            muted
          >
            <source src={project.thumbnail_url}></source>
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0"></div>
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="line-clamp-1 text-sm">{project.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
