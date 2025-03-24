import type { CollectionConfig } from "payload";
import { createdByHook, updatedByHook } from "~/utils/payload/collection-hooks";
import { createdByField, updatedByField } from "~/utils/payload/fields";

export const Users = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
        { label: "User", value: "user" },
      ],
      required: true,
      defaultValue: "user",
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
