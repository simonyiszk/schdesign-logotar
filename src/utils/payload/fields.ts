import type { Field } from "payload";

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
