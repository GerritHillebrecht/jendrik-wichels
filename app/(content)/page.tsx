import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
} from "@/components/blocks/sections";
import { createClient } from "@/lib/supabase/server";
import { POSTS_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

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
