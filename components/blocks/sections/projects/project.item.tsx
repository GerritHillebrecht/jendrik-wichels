"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import Ripple from "@/components/magicui/ripple";
import { cn } from "@/lib/utils";
import { Project } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ProjectItem({ project }: { project: Project }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const [perspective, setPerspective] = useState(600);

  const [maxTiltDegreeX, setMaxTiltDegreeX] = useState(3.5);
  const [maxTiltDegreeY, setMaxTiltDegreeY] = useState(2.5);

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

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    const distanceX = centerX - relativeX;
    const distanceY = centerY - relativeY;

    const percentX = distanceX / centerX;
    const percentY = distanceY / centerY;

    setXTilt(percentX * maxTiltDegreeX);
    setYTilt(percentY * maxTiltDegreeY);
  }

  return (
    <Link
      href={`/project/${project.slug?.current}`}
      className="relative bg-background/80 overflow-hidden border-b first-of-type:border-t sm:border-r sm:[&:nth-child(-n+2)]:border-t sm:[&:nth-child(2)]:border-r-0  lg:[&:nth-child(2)]:border-r  lg:[&:nth-child(-n+3)]:border-t lg:[&:nth-child(3)]:border-r-0"
    >
      {/* <pre>
        <code>{JSON.stringify(urlFor(project.cover!.asset!._ref).url())}</code>
      </pre> */}
      <div
        className={cn(
          "group p-4 pb-0 sm:p-8 sm:pb-0 relative"
        )}
        style={
          {
            WebkitBackdropFilter: "blur(2px)",
            perspective: `${perspective}px`,
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
          onMouseMove={handleMouseMove}
          className="transition-transform group-hover:transition-none"
          style={
            {
              transform: `rotateY(${xTilt}deg) rotateX(${-yTilt}deg)`,
            } as React.CSSProperties
          }
        >
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="hover:scale-105 transition-all duration-300 border rounded-xl p-2 hover:shadow-lg"
          >
            <BorderBeam className="hidden group-hover:block" />
            <div
              style={{ transformStyle: "preserve-3d" }}
              className="relative aspect-video overflow-hidden rounded-[6px]"
            >
              {isLoading && (
                <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                  <Ripple />
                  {/* <Loader size={24} className="animate-spin" /> */}
                </div>
              )}
              <video
                style={{ transformStyle: "preserve-3d" }}
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
                poster={urlFor(project.cover!.asset!._ref).url()}
              >
                <source src={`${project.thumbnail}`}></source>
              </video>
            </div>
          </div>
        </div>
        <div className="pt-4 pb-6 -mx-8 px-8">
          <h3 className="text-lg font-bold">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
}
