import { Camera, Film, Award } from "lucide-react";
import PROFILE_IMAGE from "@/public/image/profile.jpg";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
              Capturing life's moments, one{" "}
              <span className="text-transparent block bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                frame
              </span>{" "}
              at a time.
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Hello! I'm Alex Morgan, a passionate videographer with an eye for
              detail and a heart for storytelling. With over a decade of
              experience, I've had the privilege of working on diverse projects,
              from intimate weddings to large-scale corporate events.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Camera className="w-5 h-5 text-purple-600" />
                <span className="text-gray-800 dark:text-gray-200">
                  10+ Years Experience
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Film className="w-5 h-5 text-purple-600" />
                <span className="text-gray-800 dark:text-gray-200">
                  500+ Projects Completed
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-gray-800 dark:text-gray-200">
                  Award-Winning Filmmaker
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg transform -rotate-6 scale-105 opacity-10 animate-pulse"></div>
            <Image
              src={PROFILE_IMAGE}
              alt="Alex Morgan"
              className="rounded-lg shadow-2xl relative z-10"
              width={400}
              height={400}
            />
            {/* <img
              src="/placeholder.svg?height=400&width=400"
              alt="Alex Morgan"
              className="rounded-lg shadow-2xl relative z-10"
              width={400}
              height={400}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
