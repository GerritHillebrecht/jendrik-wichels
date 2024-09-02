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

export default async function LandingPage() {
  return (
    <main>
      <HeroHomeSection />
      <ProjectsSection />
      <ServicesSection className="border-b bg-gradient-to-br from-transparent to-gray-100 dark:from-transparent dark:to-neutral-800" />
      <AboutMeSection className="border-b" />
      <AboutMeTooSection className="border-b bg-gradient-to-br from-transparent to-gray-100 dark:from-transparent dark:to-neutral-800" />
      <ExperienceSection className="border-b" />
      <ContactSection className="border-b bg-gradient-to-br from-transparent to-gray-100 dark:from-transparent dark:to-neutral-800" />
      <GameSection className="border-b" />
    </main>
  );
}
