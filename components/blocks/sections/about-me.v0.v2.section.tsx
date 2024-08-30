"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FileVideo, Award, Users } from "lucide-react";
import { CSSProperties } from "react";

export default function AboutMeSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "bg-gradient-to-br from-transparent to-gray-100 dark:from-transparent dark:to-neutral-950 py-16 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
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
              Hi, I&apos;m Alex Morgan, a passionate videographer with over a decade
              of experience in turning fleeting moments into timeless memories.
              My journey behind the lens has taken me from intimate weddings to
              grand corporate events, always with the same goal: to tell
              compelling visual stories that resonate.
            </p>
            <div className="flex space-x-8 text-foreground/70">
              <div className="flex items-center space-x-2">
                <FileVideo className="w-6 h-6 text-indigo-600" />
                <span className="font-semibold">500+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-indigo-600" />
                <span className="font-semibold">15 Awards</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-indigo-600" />
                <span className="font-semibold">300+ Clients</span>
              </div>
            </div>
          </div>
          <div className="relative h-full">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="/image/profile-jendrik.png"
              alt="Alex Morgan, Videographer"
              className="rounded-lg shadow-2xl absolute inset-0 w-full h-full object-cover block"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 font-semibold">
                10+ Years Experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
