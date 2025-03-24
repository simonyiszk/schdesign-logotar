import type { CollectionConfig } from "payload";

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
      name: "variants",
      type: "relationship",
      relationTo: "logo-variants",
      hasMany: true,
      label: "Variants",
      admin: {
        description: "The collections consists of logo variants.",
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
  ],
} satisfies CollectionConfig;
