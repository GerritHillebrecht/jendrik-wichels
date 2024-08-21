import { HeroHomeSection } from "@/components/blocks/sections/hero.home.section";

export function Landing() {
  // const heroVideoUrl =
  //   "https://firebasestorage.googleapis.com/v0/b/jgh-dev.appspot.com/o/videos%2F6243583_Snow%20Winter%20Chugach%20Alaska_By_Etienne_Claret_Artlist_HD.mp4?alt=media&token=bf220c3c-d3c1-4021-a6a7-a95ab5c3c696";
  const heroVideoUrl =
    "https://player.vimeo.com/progressive_redirect/playback/998718007/rendition/1440p/file.mp4?loc=external&log_user=0&signature=f942d65433f734af1a39405eed8ea9cbf63148b6645f3660b3d7290e2a69e8af";

  return (
    <>
      <main className="relative">
        <HeroHomeSection />
        {/* <section>
          <div className="max-w-7xl w-full mx-auto shadow-xl relative rounded-xl overflow-hidden">
            <div className="relative border aspect-[20/8] rounded-xl overflow-hidden portrait:h-[calc(100svh_-_3.5rem)]">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={heroVideoUrl} type="video/mp4" />
              </video>
            </div>

            <BorderBeam />
          </div>
        </section> */}
      </main>
      <footer></footer>
    </>
  );
}
