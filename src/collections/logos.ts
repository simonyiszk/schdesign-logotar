import type { CollectionConfig } from "payload";

export const Logos = {
  slug: "logos",
  admin: {
    description: "A logo for an institution, reszort, kör, etc.",
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Name",
      admin: {
        description: "The specific name of a logo for example: \"schdesign light\", \"schdesign dark\", etc.",
      },
    },
    {
      name: "previewImage",
      type: "relationship",
      relationTo: "media",
      required: true,
      hasMany: false,
      label: "Preview image",
      admin: {
        description: "The preview image of the logo, preferrably a small PNG file.",
      },
    },
    {
      name: "masterFile",
      type: "relationship",
      relationTo: "master-files",
      required: true,
      hasMany: false,
      label: "Master file",
      admin: {
        description: "The original file used to create the logo, preferrably a Photoshop/Illustrator/Affinity file. This file will be downloadable by users.",
      },
    },
    {
      name: "files",
      type: "relationship",
      relationTo: "media",
      hasMany: true,
      label: "Files",
      admin: {
        description: "Downloadable files for the logo, such as PNG, SVG, etc.",
      },
    },
    {
      name: "showInVariations",
      type: "checkbox",
      defaultValue: true,
      label: "Show in variations",
      admin: {
        description: "Whether to show this logo in the variations.",
      },
    },
  ],
} satisfies CollectionConfig;
