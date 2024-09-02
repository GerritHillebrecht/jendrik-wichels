"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileVideo, Award, Users } from "lucide-react";
import { CSSProperties } from "react";

export default function AboutMeTooSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative bg-gradient-to-bl from-transparent to-gray-100 dark:from-transparent dark:to-neutral-950 py-16 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      <div className="absolute inset-0">
        <RetroGrid />
      </div>
      <div className="max-w-6xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div
            className="space-y-6 order-2"
            style={{ "--bg-size": "300%" } as CSSProperties}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Soziales{" "}
              <span className="animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent inline">
                Engagement
              </span>
            </h2>
            <p className="text-lg text-foreground/70">
              Seit Jahren engagiert sich Jendrik außerdem für Gleichberechtigung
              und gegen Rassismus in verschiedensten Filmprojekten, vorrangig
              für die Bildungsorganisation Pinkstinks Germany. Dabei ist es
              Jendrik wichtig, mit Kreativität aufzuklären und ohne erhobenen
              Zeigefinger auf Augenhöhe einen positiven Beitrag für
              Gleichberechtigung und gesellschaftlichen Wandel zu leisten
            </p>
          </div>
          <div className="relative h-full aspect-square order-1">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="/image/profile.jpg"
              // src="/image/profile-jendrik.png"
              alt="Jendrik Wichels, Videographer"
              className="rounded-lg shadow absolute inset-0 w-full h-full object-cover block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
