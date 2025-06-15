import type { Access, FieldAccess } from "payload";

export const publicAccessCollection: Access = () => true;
export const noAccessCollection: Access = () => false;
export const loggedInAccessCollection: Access = ({ req }) => !!req.user;

export const adminAccessCollection: Access = ({ req }) => req.user?.role === "admin";
export const editorAccessCollection: Access = ({ req }) => req.user?.role === "editor" || req.user?.role === "admin";
export const userAccessCollection: Access = ({ req }) => req.user?.role === "user" || req.user?.role === "editor" || req.user?.role === "admin";

export const adminOrSameEmailAccessCollection: Access = ({ req }) => {
  if (!req.user) return false;
  if (req.user.role === "admin") return true;
  if (req.user.email === req.data?.email) return true;
  return false;
};

export const publicAccessField: FieldAccess = () => true;
export const noAccessField: FieldAccess = () => false;
export const loggedInAccessField: FieldAccess = ({ req }) => !!req.user;
export const adminAccessField: FieldAccess = ({ req }) => req.user?.role === "admin";
