import type { CollectionConfig } from "payload";

export const LogoVariants = {
  slug: "logo-variants",
  admin: {
    description: "A logo variant is a specific grouping of logos to keep track of different versions of the same logo.",
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Name",
      admin: {
        description: "The name of the logo card on the website for example: Kir-Dev, schdesign, KSZK, etc.",
      },
    },
    {
      name: "logos",
      type: "relationship",
      relationTo: "logos",
      required: true,
      hasMany: true,
      label: "Logos",
      admin: {
        description: "The logos that are part of this variant.",
      },
    },
    {
      name: "showInCollections",
      type: "checkbox",
      defaultValue: true,
      label: "Show in collections",
      admin: {
        description: "Whether to show this variant in the collections.",
      },
    },
  ],
} satisfies CollectionConfig;
