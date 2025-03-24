import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    PAYLOAD_SECRET: z.string().min(1),
    BLOB_READ_WRITE_TOKEN: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN
  },
});