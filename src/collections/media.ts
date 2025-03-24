import type { CollectionConfig } from "payload";

export const Media = {
  slug: "media",
  admin: {
    description: "Files in .png, .webp, .ico, .svg formats.",
  },
  upload: {
    staticDir: "media",
    imageSizes: [],
    // png, webp, ico, svg
    mimeTypes: ["image/png", "image/webp", "image/x-icon", "image/svg+xml"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
} satisfies CollectionConfig;
