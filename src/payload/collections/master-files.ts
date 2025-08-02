import type { CollectionConfig } from "payload";
import { publicAccessCollection, editorAccessCollection } from "~/payload/access-control";
import { createdByHook, hideSensitiveFieldsHook, invalidateNextCacheAfterChangeHook, invalidateNextCacheAfterDeleteHook, updatedByHook } from "~/payload/collection-hooks";
import { createdByField, updatedByField } from "~/payload/fields";

export const MasterFiles = {
  slug: "master-files",
  admin: {
    description: "Master files are the original files used to create logos, such as Photoshop/Illustrator/Affinity etc. files.",
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
