import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Mail, Map, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function ContactSection({ className }: { className?: string }) {
  return (
    <section
      id="contact"
      className={cn("w-full py-12 md:py-24 lg:py-32", className)}
    >
      <div className=" mx-auto max-w-7xl">
        <div className="grid gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 mb-14">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              {/* The complete platform for building the Web */}
              Ihr{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#42275a] to-[#734b6d]">
                Gutachter
              </span>{" "}
              für schnelle und präzise Bewertungen.
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <Badge variant="outline">Immer zur Stelle</Badge>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Wir bieten Sachverständigen Bewertungen für nahezu alle Fahrzeuge
              und professionellen Transport.
            </p>
            <div className="space-x-4">
              <Link
                className="inline-flex gap-2 h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="tel:0123456789"
              >
                <Phone size={14} />
                Notfall
              </Link>
            </div>
          </div>
        </div>
        <div className="card-container grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Anschrift</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <Map size={24} />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Gutachter Christian Saleh
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Jarrestraße 20, 22303 Hamburg
                  </p>
                </div>
                {/* <Switch /> */}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Link
                className="grow"
                href="https://maps.google.com"
                target="_blank"
              >
                <Button className="w-full">Google Maps</Button>
              </Link>
            </CardFooter>
          </Card>
          {/* Telefon */}
          <Card>
            <CardHeader>
              <CardTitle>Telefon</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <Phone size={24} />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Mobil</p>
                  <p className="text-sm text-muted-foreground">0123 456 789</p>
                </div>
                {/* <Switch /> */}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Link className="grow" href="tel:0123 456 789" prefetch={false}>
                <Button className="w-full flex items-center gap-2">
                  <Phone size={16} />
                  <span>Anrufen</span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
          {/* E-Mail */}
          <Card>
            <CardHeader>
              <CardTitle>E-Mail</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <Mail size={24} />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Anfragen</p>
                  <p className="text-sm text-muted-foreground">
                    kontakt@pavel-gutachter.de
                  </p>
                </div>
                {/* <Switch /> */}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Link
                className="grow"
                href="mailto:0123 456 789"
                prefetch={false}
              >
                <Button className="w-full flex items-center gap-2">
                  <Mail size={16} />
                  <span>Schreiben</span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
