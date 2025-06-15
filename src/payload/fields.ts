import type { Field, TextFieldSingleValidation } from "payload";

export const createdByField = {
  name: "createdBy",
  type: "relationship",
  relationTo: "users",
  access: {
    update: () => false,
  },
  admin: {
    readOnly: true,
    position: "sidebar",
    condition: (data) => Boolean(data.createdBy),
  },
} satisfies Field;

export const updatedByField = {
  name: "updatedBy",
  type: "relationship",
  relationTo: "users",
  access: {
    update: () => false,
  },
  admin: {
    readOnly: true,
    position: "sidebar",
    condition: (data) => Boolean(data.updatedBy),
  },
} satisfies Field;

export const validateSlug: TextFieldSingleValidation = (value, options) => {
  const pattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/; // Matches lowercase letters, numbers, and hyphens, but not starting or ending with a hyphen

  if (
    value &&
    !pattern.test(value)
  ) {
    return "The slug must be URL friendly.";
  }

  if (!value && options.required) {
    return "The slug is required.";
  }

  return true;
};

export const validateColor: TextFieldSingleValidation = (value, options) => {
  const patternHEX = /^#[0-9a-f]{6}$/i;
  const patternRGB = /^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/;
  const patternRGBA = /^rgba\(\d{1,3}, \d{1,3}, \d{1,3}, \d?(\.\d+)?\)$/;
  const patternHSL = /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/;
  const patternHSLA = /^hsla\(\d{1,3}, \d{1,3}%, \d{1,3}%, \d?(\.\d+)?\)$/;

  if (
    value &&
    !patternHEX.test(value) &&
    !patternRGB.test(value) &&
    !patternRGBA.test(value) &&
    !patternHSL.test(value) &&
    !patternHSLA.test(value)
  ) {
    return "The color must be a valid HEX, RGB, RGBA, HSL, or HSLA color.";
  }

  if (!value && options.required) {
    return "The color is required.";
  }

  return true;
};
