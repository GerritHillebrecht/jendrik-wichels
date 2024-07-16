"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "../../ui/button";
import { Headline } from "../typography/headline";
import { useEffect, useRef } from "react";

export function HeroSection() {
  // const heroVideoUrl =
  //   "https://player.vimeo.com/progressive_redirect/playback/379362309/rendition/1080p/file.mp4?loc=external&log_user=0&signature=63beaf68deed6ec3c35082d2baeef3d20e293169dbae02a5be1e25922211b14f";
  // const heroVideoUrl =
  //   "https://uwhfzfpqocpx59ex.public.blob.vercel-storage.com/6243583_Snow%20Winter%20Chugach%20Alaska_By_Etienne_Claret_Artlist_HD-8qRBKokXxJE8MH702JDDAOaaZq2DKh.mp4";
  // const heroVideoUrl = "https://uwhfzfpqocpx59ex.public.blob.vercel-storage.com/hero-drone-fDRcTObrRaE19taJ3QZgMVj9ri8eGp.mp4"
  const heroVideoUrl = "/video/hero/hero-helicopter.mp4"

  return (
    <section
      className="w-full relative"
    >
      <video
        className="aspect-[20/8] portrait:h-[calc(100svh_-_3.5rem)] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center gap-y-4 justify-center text-center px-4 md:px-6">
        <div className="badge-list flex items-center gap-x-2">
          <Badge variant="outline" className="text-white">
            Filming
          </Badge>
          <Badge variant="outline" className="text-white">
            Editing
          </Badge>
          <Badge variant="outline" className="text-white">
            Grading
          </Badge>
        </div>
        <Headline className="text-white">
          <span className="ml-2">Just better visuals.</span>
        </Headline>

        <p className="text-lg md:text-xl text-white max-w-[700px]">
          Looking for a professional videographer? You&apos;ve come to the right
          place.
        </p>
        <div className="flex items-center gap-x-3 mt-2">
          <Button>Convince me</Button>
          <Button variant="outline" className="bg-transparent text-background">
            I want you
          </Button>
        </div>
      </div>
    </section>
  );
}
