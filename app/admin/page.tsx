import { CreateProjectForm } from "@/components/forms/create-project";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="mx-auto max-w-4xl py-8">
      <h1 className="mb-4 text-4xl font-bold">Neues Projekt anlegen</h1>
      <CreateProjectForm />
    </div>
  );
}
