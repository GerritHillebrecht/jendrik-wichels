import { createClient } from "@/lib/supabase/server";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  ExperienceSection,
} from "@/components/blocks/sections";
import { Posts } from "@/components/ui/posts";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERYResult } from "@/sanity.types";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function LandingPage() {
  const client = createClient();
  const { data: projects } = await client
    .from("projects")
    .select("*")
    .limit(6)
    .order("created_at", { ascending: false });

  const posts = await sanityFetch<POSTS_QUERYResult>({
    query: POSTS_QUERY,
  });

  return (
    <main>
      <HeroSection />
      <Posts posts={posts} />
      <ProjectsSection className="border-b" projects={projects} />
      <AboutSection className="border-b" />
      <ExperienceSection className="border-b" />
      <ServicesSection className="border-b" />
      <ContactSection />
    </main>
  );
}
