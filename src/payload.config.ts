import sharp from 'sharp'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { env } from './env'
import { fileURLToPath } from 'url'
import path from 'path'
import { Users } from './collections/users'
import { LogoCollections } from './collections/logo-collections'
import { Logos } from './collections/logos'
import { LogoVariants } from './collections/logo-variants'
import { MasterFiles } from './collections/master-files'
import { Media } from './collections/media'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor(),
  collections: [
    LogoCollections,
    Logos,
    LogoVariants,
    MasterFiles,
    Media,
    Users,
  ],
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL,
    }
  }),
  plugins: [
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
        'master-files': true
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  sharp,
})