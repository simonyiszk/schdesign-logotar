import type { CollectionConfig } from "payload";

export const Logos = {
  slug: "logos",
  admin: {
    description: "A logo for an institution, reszort, kör, etc.",
    useAsTitle: "Name",
  },
  fields: [
    {
      name: "Name",
      type: "text",
      required: true,
    },
    {
      name: "Preview image",
      type: "relationship",
      relationTo: "media",
      required: true,
      hasMany: false,
      admin: {
        description: "The preview image of the logo, preferrably a small PNG file.",
      },
    },
    {
      name: "Master file",
      type: "relationship",
      relationTo: "master-files",
      required: true,
      hasMany: false,
      admin: {
        description: "The original file used to create the logo, preferrably a Photoshop/Illustrator/Affinity file. This file will be downloadable by users.",
      },
    },
    {
      name: "Files",
      type: "relationship",
      relationTo: "media",
      hasMany: true,
      admin: {
        description: "Downloadable files for the logo, such as PNG, SVG, etc.",
      },
    },
    {
      name: "Show in variations",
      type: "checkbox",
      defaultValue: true,
    },
  ],
} satisfies CollectionConfig;
