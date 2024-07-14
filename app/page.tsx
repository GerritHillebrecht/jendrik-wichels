import { createClient } from "@/lib/supabase/server";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  ExperienceSection,
} from "@/components/blocks/sections";

export default async function LandingPage() {
  const client = createClient();
  const { data: projects } = await client
    .from("projects")
    .select("*")
    .limit(6)
    .order("created_at", { ascending: false });

  return (
    <main>
      <HeroSection />
      <ProjectsSection className="border-b" projects={projects} />
      <AboutSection className="border-b" />
      <ExperienceSection className="border-b" />
      <ServicesSection className="border-b" />
      <ContactSection />
    </main>
  );
}
