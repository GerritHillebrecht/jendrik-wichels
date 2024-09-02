import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./button";
import Link from "next/link";

export function NavbarMenu({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center mx-4", className)}>
      <Link href="/projects" className={buttonVariants({ variant: "link" })}>Meine Projekte</Link>
      <Link href="/projects" className={buttonVariants({ variant: "link" })}>Über mich</Link>
      <Link href="tel:0170855455" className={cn("ml-2", buttonVariants({ variant: "outline" }))}>Kontakt</Link>
    </nav>
  );
}
