"use client";

import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileVideo, Award, Users } from "lucide-react";
import { CSSProperties } from "react";

export default function AboutMeSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative from-transparent bg-neutral-200 dark:bg-neutral-800 to-gray-100 dark:from-transparent dark:to-neutral-950 py-16 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "opacity-30 [mask-image:radial-gradient(50vw_circle_at_center,white,transparent)]"
        )}
      />
      <div className="max-w-6xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2
              className="text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              style={{ "--bg-size": "300%" } as CSSProperties}
            >
              Capturing life&apos;s moments, one{" "}
              <span className="animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent inline">
                frame
              </span>{" "}
              at a time.
            </h2>
            <p className="text-lg text-foreground/70">
              Jendrik Wichels ist ein leidenschaftlicher Filmemacher aus
              Hamburg. Nach dem Filmstudium sammelte er bereits jahrelange und
              diverse Erfahrung an Filmsets von Serien, Filmen und Werbedrehs,
              weitere interessante Schritte mit einer eigenen Filmproduktion und
              einer Festanstellung in einer Werbeagentur (Territory) folgten.
              Hier wurden Projekte für Kunden wie Hornbach, Porsche, Levis, St.
              Pauli, Lufthansa und viele weitere umgesetzt. Egal ob Konzept,
              Dreh oder Schnitt - Jendrik kann mit vielfältigen Fähigkeiten
              unterstützen und umsetzen.
            </p>
            <div className="text-foreground/70">
              <blockquote className="mt-6 border-l-2 border-l-red-400 pl-6 italic">
                &raquo;&nbsp;Ich kenne niemanden, der mit so viel Herzblut in
                jedes Projekt geht und selber erst happy ist, wenn wirklich alle
                Beteiligten zufrieden sind. Er kommuniziert immer freundlich und
                zielorientiert und liefert auch in kleinen Teams großartige
                Ergebnisse. 😉&nbsp;&laquo;
              </blockquote>
              <span className="block mt-4">
                Hat bis jetzt wahrscheinlich niemand genau so gesagt, aber so
                würde ich es mir auf jeden Fall selber erhoffen
              </span>
              <span className="block mt-2 italic">Jendrik Wichels</span>
            </div>
          </div>
          <div className="relative h-full aspect-square md:aspect-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="/image/profile-action.jpg"
              // src="/image/profile-jendrik.png"
              alt="Jendrik Wichels, Videographer"
              className="rounded-lg shadow absolute inset-0 w-full h-full object-cover object-right block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
