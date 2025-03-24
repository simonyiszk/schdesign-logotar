import type { CollectionConfig } from "payload";

export const Users = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
} satisfies CollectionConfig;
