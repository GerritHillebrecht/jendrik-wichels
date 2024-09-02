import { FadeText } from "@/components/magicui/fade-text";
import { HighlightHeadline } from "@/components/magicui/highlight-headline";
import Particles from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function HeroHomeSection() {
  const heroVideoUrl =
    "https://player.vimeo.com/progressive_redirect/playback/998718007/rendition/1440p/file.mp4?loc=external&log_user=0&signature=f942d65433f734af1a39405eed8ea9cbf63148b6645f3660b3d7290e2a69e8af";

  return (
    <section className="group relative py-12 aspect-[16/6] flex items-center border-b shadow-xl bg-neutral-800 dark:bg-none isolate">
      <Particles
        className="absolute h-full max-h-screen top-0"
        quantity={100}
        ease={80}
        color="#fff"
        refresh
      />
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1] group-hover:md:opacity-50 opacity-100 transition-opacity duration-300 dark:opacity-30"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>
      <div className="flex flex-col items-center text-center gap-y-8 max-w-5xl mx-auto relative -translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <HighlightHeadline>Concept | Filming | Editing</HighlightHeadline>

        <FadeText
        // from-black 
        // to-black/40 
          className="bg-gradient-to-br whitespace-pre-wrap from-white from-30% to-white/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.2, duration: 0.5 } },
          }}
          text="Jendrik Wichels Filmemacher"
        />

        <FadeText
          className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.3, duration: 0.5 } },
          }}
          text="Richtig Bock auf gute Geschichten und schöne Bilder."
        />
        <Button className="group animate-in fade-in slide-in-from-top !duration-500 delay-700 fill-mode-both">
          Contact me
          <ArrowRightIcon className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>
    </section>
  );
}
