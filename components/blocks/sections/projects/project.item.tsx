"use client";

import { cn } from "@/lib/utils";
import { Tables } from "@/types/supabase";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ProjectItem({
  project,
  index,
}: {
  project: Tables<"projects">;
  index: number;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const [perspective, setPerspective] = useState(800);

  const [maxTiltDegreeX, setMaxTiltDegreeX] = useState(5);
  const [maxTiltDegreeY, setMaxTiltDegreeY] = useState(5);

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
    <Link
      href={`/video/${project.id}`}
      className="border-b first-of-type:border-t sm:border-r sm:[&:nth-child(-n+2)]:border-t sm:[&:nth-child(2)]:border-r-0  lg:[&:nth-child(2)]:border-r  lg:[&:nth-child(-n+3)]:border-t lg:[&:nth-child(3)]:border-r-0"
    >
      <div
        className={cn(
          "group p-4 pb-0 sm:p-8 sm:pb-0 bg-background/10 backdrop-blur-xl sm:backdrop-blur-[3px]"
        )}
        style={
          {
            "-webkit-backdrop-filter": "blur(2px)",
          } as React.CSSProperties
        }
        onMouseEnter={(e) => setIsHovered(true)}
        onMouseLeave={(e) => {
          setIsHovered(false);
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
          <div className="hover:scale-105 transition-all duration-300 border rounded-xl p-2 hover:shadow-lg backdrop-blur-[2px] backdrop-saturate-150">
            <div className="relative aspect-video overflow-hidden rounded-[6px]">
              {isLoading && (
                <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                  <Loader size={32} className="animate-spin" />
                </div>
              )}
              <video
                ref={videoRef}
                onLoadStart={(e) => setIsLoading(true)}
                onCanPlay={(e) => setIsLoading(false)}
                onLoadedData={(e) => setIsLoading(false)}
                onLoadedMetadata={(e) => setIsLoading(false)}
                className="aspect-video object-cover"
                controlsList="nodownload"
                playsInline
                muted
                preload="metadata"
              >
                <source src={`${project.thumbnail_url}#t=0.1`}></source>
              </video>
            </div>
          </div>
        </div>
        <div className="py-4 -mx-8 px-8">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <p className="line-clamp-1 text-sm">{project.description}</p>
        </div>
      </div>
    </Link>
  );
}
