import type { CollectionConfig } from "payload";

export const LogoVariants = {
  slug: "logo-variants",
  admin: {
    description: "Variants of a logo, such as: color, size, etc. Helpfull for keeping track of changes in a logo over time or using different versions in different contexts.",
    useAsTitle: "Name",
  },
  fields: [
    {
      name: "Name",
      type: "text",
      required: true,
    },
    {
      name: "Logos",
      type: "relationship",
      relationTo: "logos",
      required: true,
      hasMany: true,
    },
    {
      name: "Show in collections",
      type: "checkbox",
      defaultValue: true,
    },
  ],
} satisfies CollectionConfig;
