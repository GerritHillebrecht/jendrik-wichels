import { Badge } from "@/components/ui/badge";
import { Button } from "../../ui/button";
import { Headline } from "../typography/headline";

export function HeroSection() {
  // const heroVideoUrl =
  //   "https://firebasestorage.googleapis.com/v0/b/jgh-dev.appspot.com/o/videos%2F6243583_Snow%20Winter%20Chugach%20Alaska_By_Etienne_Claret_Artlist_HD.mp4?alt=media&token=bf220c3c-d3c1-4021-a6a7-a95ab5c3c696";
  const heroVideoUrl =
    "https://player.vimeo.com/progressive_redirect/playback/998718007/rendition/1440p/file.mp4?loc=external&log_user=0&signature=f942d65433f734af1a39405eed8ea9cbf63148b6645f3660b3d7290e2a69e8af";

  return (
    <section className="w-full relative aspect-[20/8] portrait:h-[calc(100svh_-_3.5rem)]">
      <video
        className="aspect-[20/8] portrait:h-[calc(100svh_-_3.5rem)] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center gap-y-4 justify-center text-center px-4 md:px-6">
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
        <Headline className="text-white">
          <span className="ml-2">Just better visuals.</span>
        </Headline>

        <p className="text-lg md:text-xl text-white max-w-[700px]">
          Looking for a professional videographer? You&apos;ve come to the right
          place.
        </p>
        <div className="flex items-center gap-x-3 mt-2">
          <Button>Convince me</Button>
          <Button variant="outline" className="bg-transparent text-background">
            I want you
          </Button>
        </div>
      </div>
    </section>
  );
}
