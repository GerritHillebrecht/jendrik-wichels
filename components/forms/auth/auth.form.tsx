"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "@/app/(content)/login/actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, Eye, Loader } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({
    message: "Bitte gib eine gültige E-Mail-Adresse ein.",
  }),
  password: z.string().min(4, {
    message: "Das Passwort muss mindestens 4 Zeichen lang sein.",
  }),
});

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState<
    "password" | "text"
  >("password");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: any) {
    console.log("type", typeof data, data);
    setIsLoading(true);
    await login(data);
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Deine E-Mail Adresse"
                  />
                </FormControl>
                <FormDescription>
                  Wir geben deine E-Mail Adresse niemals weiter.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center justify-between gap-1">
                  Passwort{" "}
                  <span
                    onClick={() =>
                      setPasswordInputType((prev) =>
                        prev === "password" ? "text" : "password"
                      )
                    }
                    className="text-[0.5rem] uppercase tracking-widest"
                  >
                    passwort Anzeigen
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type={passwordInputType}
                    placeholder="Dein Passwort"
                  />
                </FormControl>
                <FormDescription>
                  Dein bei der Registrierung angegebenes Passwort.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6 flex items-center gap-2">
          <Button type="submit">
            <span>Anmelden</span>
            <div className="ml-8">
              {isLoading ? (
                <Loader className="animate-spin" size={16} />
              ) : (
                <ArrowRight size={14} />
              )}
            </div>
          </Button>
          <Button variant="link" asChild type="button">
            <Link href="/auth/retrieve-password">Passwort vergessen</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
