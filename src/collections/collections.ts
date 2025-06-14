import type { CollectionConfig } from "payload";
import { createdByHook, hideSensitiveFieldsHook, updatedByHook } from "~/utils/payload/collection-hooks";
import { createdByField, updatedByField, validateSlug } from "~/utils/payload/fields";

export const Collections = {
  slug: "collections",
  admin: {
    description: "Collections of logos grouped together using an arbitrary rule, such as: institution, reszort, kör, etc.",
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Name",
      admin: {
        description: "The name of the collection for example: BME, Schönherz, Simonyi, etc.",
      },
    },
    {
      name: "slug",
      type: "text",
      validate: validateSlug,
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "The slug of the collection, must be unique and URL friendly. For example: bme, schonherz, simonyi, etc.",
      },
    },
    {
      name: "children",
      type: "relationship",
      relationTo: ["collections", "logos"],
      hasMany: true,
      label: "Children collections and logos",
      admin: {
        description: "The child collections and logos of this collection.",
      },
    },
    {
      name: "showInNavbar",
      type: "checkbox",
      defaultValue: false,
      required: true,
      label: "Show in navbar",
      admin: {
        description: "Whether to show this collection in the navbar",
      },
    },
    {
      name: "showInParent",
      type: "checkbox",
      defaultValue: false,
      required: true,
      label: "Show in parent collection",
      admin: {
        description: "Whether to show this collection in the parent collection's page. If this is false, the collection will not be displayed in the parent collection's page, but it can still be accessed directly using the slug value.",
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
