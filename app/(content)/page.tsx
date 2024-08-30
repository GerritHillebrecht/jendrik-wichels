import {
  ContactSection,
  ExperienceSection,
  HeroHomeSection,
  ProjectsSection,
  ServicesSection
} from "@/components/blocks/sections";
import AboutMeSection from "@/components/blocks/sections/about-me.v0.v2.section";

export default async function LandingPage() {
  return (
    <main>
      <HeroHomeSection />
      <ProjectsSection className="border-b" />
      <AboutMeSection className="border-b" />
      {/* <AboutSection className="border-b" /> */}
      <ExperienceSection className="border-b" />
      <ServicesSection className="border-b" />
      <ContactSection />
    </main>
  );
}
