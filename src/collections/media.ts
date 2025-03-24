import type { CollectionConfig } from "payload";
import { createdByHook, updatedByHook } from "~/utils/payload/collection-hooks";
import { createdByField, updatedByField } from "~/utils/payload/fields";

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
      label: "Alt text",
      admin: {
        description: "The alt text for the image.",
      },
    },
    createdByField,
    updatedByField,
  ],
  hooks: {
    beforeChange: [
      createdByHook,
      updatedByHook,
    ],
  },
} satisfies CollectionConfig;
