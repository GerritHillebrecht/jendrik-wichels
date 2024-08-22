import { FadeText } from "@/components/magicui/fade-text";
import { HighlightHeadline } from "@/components/magicui/highlight-headline";
import Particles from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function HeroHomeSection() {
  const heroVideoUrl =
    "https://player.vimeo.com/progressive_redirect/playback/998718007/rendition/1440p/file.mp4?loc=external&log_user=0&signature=f942d65433f734af1a39405eed8ea9cbf63148b6645f3660b3d7290e2a69e8af";

  return (
    <section className="relative py-12 border-b shadow-xl">
      <Particles
        className="absolute h-full max-h-screen top-0"
        quantity={100}
        ease={80}
        color="#fff"
        refresh
      />
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-50 dark:opacity-30"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>
      <div className="flex flex-col items-center text-center py-20 gap-y-8 max-w-5xl mx-auto relative">
        <HighlightHeadline>Filming | Editing | Grading</HighlightHeadline>

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
          text="Looking for a professional videographer? You've come to the right
          place."
        />
        <Button className="group animate-in fade-in slide-in-from-top !duration-500 delay-700 fill-mode-both">
          I want you.
          <ArrowRightIcon className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>
    </section>
  );
}
