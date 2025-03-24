import type { CollectionBeforeChangeHook } from "payload";

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
