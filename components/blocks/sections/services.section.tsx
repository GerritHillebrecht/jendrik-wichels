import { cn } from "@/lib/utils";
import { Badge } from "../../ui/badge";
import RetroGrid from "@/components/magicui/retro-grid";

export function ServicesSection({ className }: { className?: string }) {
  return (
    <section
      className={cn("relative w-full py-12 md:py-24 lg:py-32 isolate", className)}
    >
      <div className="absolute inset-0 -z-[1]">
        <RetroGrid />
      </div>
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline">Für Dich da</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-80">
              {/* Faster iteration. More innovation. */}
              Leistungen
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Jendrik begleitet die Filmproduktion professionell durch alle
              Stufen des Prozesses. Von Konzeptionierung über Produktion und
              Dreh bis hin zur Post-Produktion und Schnitt wird eine
              reibungslose und zielorientierte Zusammenarbeit angestrebt.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Konzept</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ideen entwickeln, weiterführen oder gemeinsam Formate erarbeiten.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Produktion</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Die komplette Organisation des Drehs, des Teams, den Locations und
              aller weiteren Aspekte für einen reibungslosen Ablauf zu
              garantieren.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Post Produktion</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Alle Phasen nach dem Dreh wie Schnitt, Grading, Sound Design,
              Animation und Bereitstellung aller nötigen Formate.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Drone Operator</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Zertifizierter Drohnenpilot mit eigenem Equipment. Also auch für
              Luftbilder kann jederzeit gesorgt werden.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Casting</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            Großes Netzwerk an Schauspieler*innen aus verschiedenen kreativen Bereichen
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Make the logo bigger</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              So <span className="text-6xl font-black">GROSS</span> wie ihr
              wollt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
