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
      <ProjectsSection className="border-b" />
      <AboutMeSection className="border-b" />
      <AboutMeTooSection className="border-b" />
      <ExperienceSection className="border-b" />
      <GameSection className="border-b" />
      <ServicesSection className="border-b" />
      <ContactSection />
    </main>
  );
}
