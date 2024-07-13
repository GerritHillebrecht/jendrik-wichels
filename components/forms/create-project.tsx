"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Textarea } from "../ui/textarea";
import { Loader } from "lucide-react";

import { formSchema } from "./project-form-data";
import { addProjectToDatabase } from "./project-form.action";

export function CreateProjectForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail_url: "",
      video_url: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    await addProjectToDatabase(values);
    setIsLoading(false);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-8">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Angezeigter Titel</FormLabel>
                <FormControl>
                  <Input placeholder="Ein prägnanter Titel" {...field} />
                </FormControl>
                <FormDescription>Gib Titel.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <span></span>
          <FormField
            control={form.control}
            name="thumbnail_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thumbnail URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Url aus Vimeos "Video file links"'
                    {...field}
                  />
                </FormControl>
                <FormDescription>Ca. 360p reichen aus.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="video_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Url aus Vimeos "Video file links"'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Komplette Eskalation bezüglich der Auflösung
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Projektbeschreibung</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Eine gute Beschreibung" {...field} />
                  </FormControl>
                  <FormDescription>Worum ging es im Projekt?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button disabled={isLoading} type="submit">
          {isLoading && <Loader className="animate-spin mr-2" size={14} />}
          Projekt anlegen
        </Button>
      </form>
    </Form>
  );
}
