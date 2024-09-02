import { FadeText } from "@/components/magicui/fade-text";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Spline from "@splinetool/react-spline/next";

export function GameSection({ className }: { className?: string }) {
  return (
    <section className={cn("hidden md:block", className)}>
      <div className="text-center max-w-4xl mx-auto my-20">
        <Badge className="mb-4">Kleine Auszeit</Badge>
        <FadeText
          className="bg-gradient-to-br whitespace-pre-wrap from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.2, duration: 0.5 } },
          }}
          text="Genug vom stressigen Alltag?"
        />
        <p className="mt-8 max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          WASD, Pfeiltasten und Leertaste zum Spielen
        </p>
      </div>
      <div className="aspect-[16/6] relative">
        <Spline scene="https://prod.spline.design/Drf7d2kmXlGGD2ce/scene.splinecode" />
      </div>
    </section>
  );
}
