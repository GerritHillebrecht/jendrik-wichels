import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import AnimatedShinyText from "./animated-shiny-text";
import { BorderBeam } from "./border-beam";
import { FadeText } from "./fade-text";
import Particles from "./particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Navbar } from "../ui/navbar";
import ShineBorder from "./shine-border";
import { CSSProperties } from "react";
import { HighlightHeadline } from "./highlight-headline";

export function Landing() {
  // const heroVideoUrl =
  //   "https://firebasestorage.googleapis.com/v0/b/jgh-dev.appspot.com/o/videos%2F6243583_Snow%20Winter%20Chugach%20Alaska_By_Etienne_Claret_Artlist_HD.mp4?alt=media&token=bf220c3c-d3c1-4021-a6a7-a95ab5c3c696";
  const heroVideoUrl =
    "https://player.vimeo.com/progressive_redirect/playback/998718007/rendition/1440p/file.mp4?loc=external&log_user=0&signature=f942d65433f734af1a39405eed8ea9cbf63148b6645f3660b3d7290e2a69e8af";

  return (
    <>
      <main className="relative">
        <Particles
          className="absolute h-full max-h-screen top-0"
          quantity={100}
          ease={80}
          color="#fff"
          refresh
        />
        <section className="relative py-12">
          <video
            className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-40 dark:opacity-30"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
          <div className="flex flex-col items-center text-center py-20 gap-y-8 max-w-5xl mx-auto relative">
            <HighlightHeadline>Introducing Features Section</HighlightHeadline>

            <FadeText
              className="bg-gradient-to-br whitespace-pre-wrap dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl"
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.2, duration: 0.5 } },
              }}
              text="Just better visuals."
            />

            <FadeText
              className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance"
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.3, duration: 0.5 } },
              }}
              text="Beautifully designed, animated components and templates built with Tailwind CSS, React, and Framer Motion."
            />
            <Button className="group animate-in fade-in slide-in-from-top !duration-500 delay-700 fill-mode-both">
              Get started for free
              <ArrowRightIcon className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </section>
        {/* <section>
          <div className="max-w-7xl w-full mx-auto shadow-xl relative rounded-xl overflow-hidden">
            <div className="relative border aspect-[20/8] rounded-xl overflow-hidden portrait:h-[calc(100svh_-_3.5rem)]">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={heroVideoUrl} type="video/mp4" />
              </video>
            </div>

            <BorderBeam />
          </div>
        </section> */}
      </main>
      <footer></footer>
    </>
  );
}
