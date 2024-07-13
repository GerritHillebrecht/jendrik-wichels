/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b9SOKsetSBO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function LandingComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 sm:h-16 flex items-center sticky top-0 z-50 bg-white/80 backdrop-blur backdrop-saturate-150 shadow">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <h1 className={cn("uppercase text-3xl", bebas.className)}>
            Jendrik Wichels
          </h1>
          <span className="sr-only">Videographer Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full relative">
          <video className="aspect-[22/8] object-cover" autoPlay muted>
            <source src="/video/hero/hero-drone.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Capturing Moments, Telling Stories
            </h1>
            <p className="text-lg md:text-xl text-white max-w-[700px] mt-4">
              I&apos;m a videographer passionate about creating visually stunning and
              emotionally captivating videos for businesses and individuals.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-8"
              prefetch={false}
            >
              Hire Me
            </Link>
          </div>
        </section>
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Latest Projects
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent video projects and see how I can
                  bring your vision to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3">
              <Link href={`/video/${"hero-boat.mp4"}`}>
                <div className="rounded-xl overflow-hidden">
                  {/* <img
                  src="/placeholder.svg"
                  width={800}
                  height={450}
                  alt="Project 1"
                  className="w-full h-auto object-cover"
                /> */}

                  <div
                    style={{ padding: "56.25% 0 0 0", position: "relative" }}
                  >
                    <iframe
                      src="https://player.vimeo.com/video/321295714?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&title=0&byline=0&portrait=0&like=0&amp;&watchlater=0&amp;&share=0&amp;"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      title="Moprgen kommt der Nikolaus"
                    ></iframe>
                  </div>
                  {/* <video
                    src="/video/hero/hero-boat.mp4"
                    className="w-full aspect-video object-cover"
                    autoPlay
                    loop
                    muted
                  /> */}
                  <div className="bg-background p-4">
                    <h3 className="text-xl font-bold">Corporate Video</h3>
                    <p className="text-muted-foreground">
                      A dynamic and engaging corporate video showcasing the
                      company&apos;s products and services.
                    </p>
                  </div>
                </div>
              </Link>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width={800}
                  height={450}
                  alt="Project 2"
                  className="w-full h-auto object-cover"
                />
                <div className="bg-background p-4">
                  <h3 className="text-xl font-bold">Wedding Highlight</h3>
                  <p className="text-muted-foreground">
                    A beautifully crafted wedding highlight video that captures
                    the essence of the special day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <img
                  src="/placeholder.svg"
                  width={550}
                  height={550}
                  alt="About"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    About Me
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;m a passionate videographer with over 5 years of
                    experience in creating visually stunning and emotionally
                    captivating videos. I specialize in a variety of video
                    genres, including corporate, wedding, and lifestyle.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">My Approach</h3>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I believe that every video should tell a unique story and
                    connect with the audience on a deeper level. I work closely
                    with my clients to understand their vision and bring it to
                    life through my creative eye and technical expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I offer a wide range of video production services to capture
                  your unique story and bring your vision to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="rounded-xl bg-background p-6 shadow-md">
                <VideoIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold mt-4">Corporate Videos</h3>
                <p className="text-muted-foreground mt-2">
                  Showcase your business, products, and services through
                  high-quality corporate videos.
                </p>
              </div>
              <div className="rounded-xl bg-background p-6 shadow-md">
                <CalendarIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold mt-4">Wedding Videos</h3>
                <p className="text-muted-foreground mt-2">
                  Capture the magic of your special day with a beautifully
                  crafted wedding video.
                </p>
              </div>
              <div className="rounded-xl bg-background p-6 shadow-md">
                <ListIcon className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold mt-4">Lifestyle Videos</h3>
                <p className="text-muted-foreground mt-2">
                  Bring your personal brand or lifestyle to life through
                  visually stunning videos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Let&apos;s Work Together
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;d love to discuss your video project and how I can help
                  bring your vision to life. Fill out the form below and I&apos;ll
                  get back to you as soon as possible.
                </p>
              </div>
              <form className="mx-auto w-full max-w-md space-y-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Textarea placeholder="Message" className="w-full" rows={5} />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Videographer Portfolio. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CameraIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function ListIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function VideoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
