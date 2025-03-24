import type { CollectionConfig } from 'payload'

export const LogoCollections = {
  slug: 'logo-collections',
  admin: {
    description: 'Collections of logos using an arbitrary rule, such as: Institution, Reszort, Kör, etc.',
    useAsTitle: 'Name',
  },
  fields: [
    {
      name: "Name",
      type: "text",
      required: true,
    },
    {
      name: "Logo variants",
      type: "relationship",
      relationTo: "logo-variants",
      required: true,
      hasMany: true,
    },
    {
      name: "Show in navbar",
      type: "checkbox",
      defaultValue: true,
    }
  ]
} satisfies CollectionConfig