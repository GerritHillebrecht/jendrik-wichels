import Link from "next/link";

import { cn } from "@/lib/utils";
import { Instagram } from "lucide-react";
import { Bebas_Neue } from "next/font/google";
import { ThemeSelector } from "./theme-selector";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { NavbarMenu } from "./navbar.nav-menu";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 sm:h-16 flex border-b items-center sticky top-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur backdrop-saturate-150 shadow">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <h1 className={cn("uppercase text-3xl mt-1", bebas.className)}>
          Jendrik Wichels
        </h1>
        <span className="sr-only">Videographer Portfolio</span>
      </Link>
      <NavbarMenu className="ml-auto" />
      <nav className="flex items-center gap-4 sm:gap-x-3">
        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://vimeo.com/jendrik" target="_blank">
                <Image
                  src={VimeoIcon}
                  alt="Vimeo Icon"
                  className="rounded aspect-square w-[22px] dark:invert"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Vimeo</TooltipContent>
          </Tooltip>
        </TooltipProvider> */}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="https://www.instagram.com/jendrik_wichels"
                target="_blank"
              >
                <Instagram size={24} />
              </Link>
            </TooltipTrigger>
            <TooltipContent align="end">Instagram</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <ThemeSelector />
      </nav>
    </header>
  );
}
