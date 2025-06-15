import type { CollectionConfig } from "payload";
import { editorAccessCollection, publicAccessCollection } from "~/payload/access-control";
import { createdByHook, hideSensitiveFieldsHook, updatedByHook } from "~/payload/collection-hooks";
import { createdByField, updatedByField } from "~/payload/fields";

export const Media = {
  slug: "media",
  admin: {
    description: "Files in *.png, *.webp, *.ico, *.svg formats.",
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
        description: "An alternative text of the image for accessibility purposes.",
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
    afterRead: [
      hideSensitiveFieldsHook(["createdBy", "updatedBy"]),
    ],
  },
  access: {
    read: publicAccessCollection,
    create: editorAccessCollection,
    update: editorAccessCollection,
    delete: editorAccessCollection,
  },
} satisfies CollectionConfig;
