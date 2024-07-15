"use client";

import { Tables } from "@/types/supabase";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ProjectItem({ project }: { project: Tables<"projects"> }) {
  const [isHovered, setIsHovered] = useState(false);

  const [perspective, setPerspective] = useState(400);

  const [maxTiltDegreeX, setMaxTiltDegreeX] = useState(10);
  const [maxTiltDegreeY, setMaxTiltDegreeY] = useState(10);

  const [xPercent, setXPercent] = useState(0);
  const [yPercent, setYPercent] = useState(0);

  const [xTilt, setXTilt] = useState(0);
  const [yTilt, setYTilt] = useState(0);

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
        className="group"
        onMouseLeave={() => {
          setXTilt(0);
          setYTilt(0);
        }}
      >
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const relativeX = e.clientX - rect.left;
            const relativeY = e.clientY - rect.top;

            const distanceX = centerX - relativeX;
            const distanceY = centerY - relativeY;

            const percentX = distanceX / centerX;
            const percentY = distanceY / centerY;

            setXPercent(percentX);
            setYPercent(percentY);

            setXTilt(percentX * maxTiltDegreeX);
            setYTilt(percentY * maxTiltDegreeY);
          }}
          className="transition-transform group-hover:transition-none"
          style={
            {
              transform: `rotateY(${xTilt}deg) perspective(${perspective}px) rotateX(${-yTilt}deg)`,
            } as React.CSSProperties
          }
        >
          <div className="hover:scale-105 transition-all duration-300 border rounded-xl p-4 hover:shadow-lg backdrop-blur-[2px] backdrop-saturate-150">
            <div
              // onMouseOver={() => setIsHovered(true)}
              onMouseEnter={(e) => setIsHovered(true)}
              onMouseLeave={(e) => setIsHovered(false)}
              className="relative aspect-video overflow-hidden rounded-[6px] group- transition-shadow duration-300"
            >
              <video
                ref={videoRef}
                className="aspect-video object-cover"
                controlsList="nodownload"
                playsInline
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
        </div>
      </div>
    </Link>
  );
}
