import { config } from "dotenv";
import { z } from "zod";

config();

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  CLOUDFLARE_ENDPOINT: z.string().url(),
  CLOUDFLARE_ACESS_KEY_ID: z.string(),
  CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
