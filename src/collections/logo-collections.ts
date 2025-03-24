import type { CollectionConfig } from "payload";
import { createdByHook, hideSensitiveFields, updatedByHook } from "~/utils/payload/collection-hooks";
import { createdByField, updatedByField } from "~/utils/payload/fields";

export const LogoCollections = {
  slug: "logo-collections",
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
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "The slug of the collection, must be unique and URL friendly. For example: bme, schonherz, simonyi, etc.",
      },
    },
    {
      name: "variants",
      type: "relationship",
      relationTo: "logo-variants",
      hasMany: true,
      label: "Logo variants",
      admin: {
        description: "The collection consists of logo variants.",
      },
    },
    {
      name: "showInNavbar",
      type: "checkbox",
      defaultValue: true,
      label: "Show in navbar",
      admin: {
        description: "Whether to show this collection in the navbar",
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
      hideSensitiveFields(["createdBy", "updatedBy"]),
    ],
  },
} satisfies CollectionConfig;
