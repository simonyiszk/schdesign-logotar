import type { CollectionConfig } from "payload";
import { createdByHook, hideSensitiveFieldsHook, invalidateNextCacheAfterChangeHook, invalidateNextCacheAfterDeleteHook, updatedByHook } from "~/payload/collection-hooks";
import { createdByField, updatedByField, validateColor, validateSlug } from "~/payload/fields";

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
      name: "slug",
      type: "text",
      validate: validateSlug,
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description: "The slug of the logo, must be unique and URL friendly. For example: schdesign-light, schdesign-dark, etc.",
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
      name: "previewLightBackgroundColor",
      type: "text",
      validate: validateColor,
      label: "Preview background color for light mode",
      admin: {
        description: "The background color for light mode of the preview image. Must be a HEX, RGB, RGBA, HSL, or HSLA color.",
      },
    },
    {
      name: "previewDarkBackgroundColor",
      type: "text",
      validate: validateColor,
      label: "Preview background color for Dark mode",
      admin: {
        description: "The background color for Dark mode of the preview image. Must be a HEX, RGB, RGBA, HSL, or HSLA color.",
      },
    },
    {
      name: "masterFile",
      type: "relationship",
      relationTo: "master-files",
      required: false,
      hasMany: false,
      label: "Master file",
      admin: {
        description: "The original file used to create the logo, preferably a Photoshop/Illustrator/Affinity file. This file will be downloadable by users.",
      },
    },
    {
      name: "sourceFile",
      type: "relationship",
      relationTo: "media",
      hasMany: false,
      label: "Source file",
      admin: {
        description: "The original file used to create the logo, preferably a Photoshop/Illustrator/Affinity file. This file will be downloadable by users.",
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
      name: "showInCollections",
      type: "checkbox",
      defaultValue: true,
      required: true,
      label: "Show in collections",
      admin: {
        description: "Whether to show this logo in the collections.",
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
    afterChange: [
      invalidateNextCacheAfterChangeHook,
    ],
    afterDelete: [
      invalidateNextCacheAfterDeleteHook,
    ],
  },
  access: {
    read: ({ req }) => {
      if (req.user) {
        return true;
      }

      return {
        showInCollections: {
          equals: true,
        },
      };
    },
  },
} satisfies CollectionConfig;
