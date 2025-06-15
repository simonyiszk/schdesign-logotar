import sharp from "sharp";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { env } from "./env";
import { fileURLToPath } from "url";
import path from "path";
import { Users } from "./payload/collections/users";
import { Collections } from "./payload/collections/collections";
import { Logos } from "./payload/collections/logos";
import { MasterFiles } from "./payload/collections/master-files";
import { Media } from "./payload/collections/media";


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  editor: lexicalEditor(),
  collections: [
    Collections,
    Logos,
    MasterFiles,
    Media,
    Users,
  ],
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, "@generated", "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL,
    },
  }),
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
        "master-files": true,
      },
      token: env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  sharp,
});
