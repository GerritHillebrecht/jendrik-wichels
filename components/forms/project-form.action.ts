"use server";
import { createClient } from "@/lib/supabase/server";
import { TablesInsert } from "@/types/supabase";
import { formSchema } from "./project-form-data";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addProjectToDatabase(project: TablesInsert<"projects">) {
  const client = createClient();

  try {
    formSchema.parse(project);
    const { data, error } = await client.from("projects").insert(project);
    revalidatePath("/");
    redirect("/");
  } catch (error) {
    throw error;
  }
}
