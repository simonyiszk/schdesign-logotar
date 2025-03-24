import type { CollectionConfig } from "payload";

export const MasterFiles = {
  slug: "master-files",
  admin: {
    description: "Master files are the original files used to create logos, such as Photoshop/Illustrator/Affinity files.",
  },
  upload: {
    staticDir: "master-files",
    mimeTypes: ["image/*", "application/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
} satisfies CollectionConfig;
