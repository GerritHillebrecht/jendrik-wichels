import { AuthForm } from "@/components/forms/auth/auth.form";
import Logo from "@/public/image/profile.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <section className="flex h-[calc(100vh_-_4rem)] items-center justify-center bg-foreground/5">
      <div className="grid min-h-[75%] w-full max-w-5xl grid-cols-2 overflow-hidden rounded-xl border border-foreground/5 shadow-xl">
        <div className="relative flex items-center justify-center bg-primary">
          <Image src={Logo} alt="Hero Image" className="object-cover aspect-square" />
        </div>
        <div className="flex flex-col items-center justify-center bg-background px-12 py-8">
          <h1 className="mb-8 text-2xl font-bold">Admin Login</h1>
          <AuthForm />
        </div>
      </div>
    </section>
  );
}
