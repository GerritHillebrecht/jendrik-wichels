import Image from "next/image";
import PROFILE_IMAGE from "@/public/image/profile.jpg";
import { cn } from "@/lib/utils";

export function AboutSection({ className }: { className?: string }) {
  return (
    <section
      id="about"
      className={cn("w-full py-12 md:py-24 lg:py-32", className)}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[3fr,5fr] lg:gap-12">
          <div>
            <Image
              src={PROFILE_IMAGE}
              width={550}
              height={550}
              alt="About"
              className="w-full h-auto rounded-xl object-cover aspect-square"
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
                captivating videos. I specialize in a variety of video genres,
                including corporate, wedding, and lifestyle.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">My Approach</h3>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I believe that every video should tell a unique story and
                connect with the audience on a deeper level. I work closely with
                my clients to understand their vision and bring it to life
                through my creative eye and technical expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
