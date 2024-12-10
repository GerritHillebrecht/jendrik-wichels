import {
  ContactSection,
  ExperienceSection,
  HeroHomeSection,
  ProjectsSection,
  ServicesSection,
} from "@/components/blocks/sections";
import AboutMeSection from "@/components/blocks/sections/about-me.v0.v2.section";
import AboutMeTooSection from "@/components/blocks/sections/about-me.v0.v3.section";
import { GameSection } from "@/components/blocks/sections/game.section";
import { CSSProperties } from "styled-components";

export default async function LandingPage() {
  return (
    <main
      style={
        {
          "--bg-size": "300%",
        } as CSSProperties
      }
    >
      <HeroHomeSection />
      <ProjectsSection />
      <ServicesSection className="border-b animate-gradient bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-neutral-900 bg-[length:var(--bg-size)_100%] [animation-duration:15s] shadow-inner" />
      <AboutMeSection className="border-b" />
      <AboutMeTooSection className="border-b animate-gradient bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-neutral-900 bg-[length:var(--bg-size)_100%] [animation-duration:15s] shadow-inner" />
      <ExperienceSection className="border-b" />
      {/* <ContactSection className="border-b bg-gradient-to-br from-transparent to-gray-100 dark:from-transparent dark:to-neutral-800" /> */}
      {/* <GameSection className="border-b" /> */}
    </main>
  );
}
