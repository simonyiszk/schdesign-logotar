import type { CollectionConfig } from "payload";
import { editorAccessCollection, publicAccessCollection } from "~/payload/access-control";
import { createdByHook, hideSensitiveFieldsHook, invalidateNextCacheAfterChangeHook, invalidateNextCacheAfterDeleteHook, updatedByHook } from "~/payload/collection-hooks";
import { createdByField, updatedByField } from "~/payload/fields";

export const Media = {
  slug: "media",
  admin: {
    description: "Source files, export files and preview files. Usually Illustrator, PDF, PNG, SVG, ICO files.",
  },
  upload: {
    staticDir: "media",
    imageSizes: [],
    mimeTypes: ["image/*", "application/*"],
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
    afterChange: [
      invalidateNextCacheAfterChangeHook,
    ],
    afterDelete: [
      invalidateNextCacheAfterDeleteHook,
    ],
  },
  access: {
    read: publicAccessCollection,
    create: editorAccessCollection,
    update: editorAccessCollection,
    delete: editorAccessCollection,
  },
} satisfies CollectionConfig;
