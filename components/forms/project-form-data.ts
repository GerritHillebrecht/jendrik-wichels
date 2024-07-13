import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  thumbnail_url: z.string().url(),
  video_url: z.string().url(),
});
