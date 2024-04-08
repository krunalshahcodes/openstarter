import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type loginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export type registerSchemaType = z.infer<typeof registerSchema>;
