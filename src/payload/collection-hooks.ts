import { revalidateTag } from "next/cache";
import type { CollectionBeforeChangeHook, CollectionAfterReadHook, CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

export const createdByHook: CollectionBeforeChangeHook = ({ req, operation, data }) => {
  if (operation === "create") {
    if (req.user) {
      data.createdBy = req.user.id;
      return data;
    }
  }
};

export const updatedByHook: CollectionBeforeChangeHook = ({ req, operation, data }) => {
  if (operation === "update") {
    if (req.user) {
      data.updatedBy = req.user.id;
      return data;
    }
  }
};

export function hideSensitiveFieldsHook(fields: string[]): CollectionAfterReadHook {
  const hideFields: CollectionAfterReadHook = ({ req, doc }) => {
    if (!req.user) {
      fields.forEach((field) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        doc[field] = undefined;
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return doc;
  };

  return hideFields;
}

export const invalidateNextCacheAfterChangeHook: CollectionAfterChangeHook = () => {
  revalidateTag("collections");
};

export const invalidateNextCacheAfterDeleteHook: CollectionAfterDeleteHook = () => {
  revalidateTag("collections");
};
