import Link from "next/link";

import { Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 sm:h-16 flex items-center sticky top-0 z-50 bg-white/80 backdrop-blur backdrop-saturate-150 shadow">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <h1 className={cn("uppercase text-3xl", bebas.className)}>
          Jendrik Wichels
        </h1>
        <span className="sr-only">Videographer Portfolio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Projects
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
