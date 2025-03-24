import type { CollectionConfig } from "payload";
import { createdByHook, hideSensitiveFieldsHook, updatedByHook } from "~/utils/payload/collection-hooks";
import { createdByField, updatedByField } from "~/utils/payload/fields";

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
    afterRead: [
      hideSensitiveFieldsHook(["createdBy", "updatedBy"]),
    ],
  },
} satisfies CollectionConfig;
