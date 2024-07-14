import Link from "next/link";
import { Button } from "../../ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const heroVideoUrl =
    "https://uwhfzfpqocpx59ex.public.blob.vercel-storage.com/6243583_Snow%20Winter%20Chugach%20Alaska_By_Etienne_Claret_Artlist_HD-8qRBKokXxJE8MH702JDDAOaaZq2DKh.mp4";
  // const heroVideoUrl = "https://uwhfzfpqocpx59ex.public.blob.vercel-storage.com/hero-drone-fDRcTObrRaE19taJ3QZgMVj9ri8eGp.mp4"

  return (
    <section className="w-full relative">
      <video className="aspect-[20/8] object-cover" autoPlay muted loop>
        <source src={heroVideoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 md:px-6">
        <div className="badge-list flex items-center gap-x-2">
          <Badge variant="outline" className="text-white">
            Filming
          </Badge>
          <Badge variant="outline" className="text-white">
            Editing
          </Badge>
          <Badge variant="outline" className="text-white">
            Grading
          </Badge>
        </div>
        <h1 className="text-4xl md:text-80 font-bold text-white">
          <span className="ml-2 ">Just better visuals.</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-[700px] mt-4">
          Looking for a professional videographer? You&apos;ve come to the right
          place.
        </p>
        <div className="flex items-center gap-x-3 mt-6">
          <Button>Convince me</Button>
          <Button variant="outline" className="bg-transparent text-background">
            I want you
          </Button>
        </div>
      </div>
    </section>
  );
}
