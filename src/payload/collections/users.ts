import type { CollectionConfig } from "payload";
import { adminAccessCollection, adminAccessField, adminOrSameEmailAccessCollection, loggedInAccessCollection } from "~/payload/access-control";
import { createdByHook, updatedByHook } from "~/payload/collection-hooks";
import { createdByField, updatedByField } from "~/payload/fields";

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
      label: "Role",
      admin: {
        description: "The role of the user.",
      },
      access: {
        update: adminAccessField,
      },
    },
    {
      name: "note",
      type: "textarea",
      label: "Note",
      admin: {
        description: "A note about the user.",
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
  access: {
    read: loggedInAccessCollection,
    create: adminAccessCollection,
    update: adminOrSameEmailAccessCollection,
    delete: adminAccessCollection,
  },
} satisfies CollectionConfig;
