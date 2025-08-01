/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    collections: Collection;
    logos: Logo;
    'master-files': MasterFile;
    media: Media;
    users: User;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    collections: CollectionsSelect<false> | CollectionsSelect<true>;
    logos: LogosSelect<false> | LogosSelect<true>;
    'master-files': MasterFilesSelect<false> | MasterFilesSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * Collections of logos grouped together using an arbitrary rule, such as: institution, reszort, kör, etc.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collections".
 */
export interface Collection {
  id: number;
  /**
   * The name of the collection for example: BME, Schönherz, Simonyi, etc.
   */
  name: string;
  /**
   * The slug of the collection, must be unique and URL friendly. For example: bme, schonherz, simonyi, etc.
   */
  slug: string;
  /**
   * The child collections and logos of this collection.
   */
  children?:
    | (
        | {
            relationTo: 'collections';
            value: number | Collection;
          }
        | {
            relationTo: 'logos';
            value: number | Logo;
          }
      )[]
    | null;
  /**
   * Whether to show this collection in the navbar
   */
  showInNavbar: boolean;
  /**
   * Whether to show this collection in the parent collection's page. If this is false, the collection will not be displayed in the parent collection's page, but it can still be accessed directly using the slug value.
   */
  showInParent: boolean;
  createdBy?: (number | null) | User;
  updatedBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
}
/**
 * A logo for an institution, reszort, kör, etc.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "logos".
 */
export interface Logo {
  id: number;
  /**
   * The specific name of a logo for example: "schdesign light", "schdesign dark", etc.
   */
  name: string;
  /**
   * The slug of the logo, must be unique and URL friendly. For example: schdesign-light, schdesign-dark, etc.
   */
  slug: string;
  /**
   * The preview image of the logo, preferrably a small PNG file.
   */
  previewImage: number | Media;
  /**
   * The background color for light mode of the preview image. Must be a HEX, RGB, RGBA, HSL, or HSLA color.
   */
  previewLightBackgroundColor?: string | null;
  /**
   * The background color for Dark mode of the preview image. Must be a HEX, RGB, RGBA, HSL, or HSLA color.
   */
  previewDarkBackgroundColor?: string | null;
  /**
   * The original file used to create the logo, preferrably a Photoshop/Illustrator/Affinity file. This file will be downloadable by users.
   */
  masterFile: number | MasterFile;
  /**
   * Downloadable files for the logo, such as PNG, SVG, etc.
   */
  files?: (number | Media)[] | null;
  /**
   * Whether to show this logo in the collections.
   */
  showInCollections: boolean;
  createdBy?: (number | null) | User;
  updatedBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
}
/**
 * Files in *.png, *.webp, *.ico, *.svg formats.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  /**
   * An alternative text of the image for accessibility purposes.
   */
  alt?: string | null;
  createdBy?: (number | null) | User;
  updatedBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  /**
   * The role of the user.
   */
  role: 'admin' | 'editor' | 'user';
  /**
   * A note about the user.
   */
  note?: string | null;
  createdBy?: (number | null) | User;
  updatedBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  sessions?:
    | {
        id: string;
        createdAt?: string | null;
        expiresAt: string;
      }[]
    | null;
  password?: string | null;
}
/**
 * Master files are the original files used to create logos, such as Photoshop/Illustrator/Affinity etc. files.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "master-files".
 */
export interface MasterFile {
  id: number;
  /**
   * An alternative text of the image for accessibility purposes.
   */
  alt?: string | null;
  createdBy?: (number | null) | User;
  updatedBy?: (number | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'collections';
        value: number | Collection;
      } | null)
    | ({
        relationTo: 'logos';
        value: number | Logo;
      } | null)
    | ({
        relationTo: 'master-files';
        value: number | MasterFile;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "collections_select".
 */
export interface CollectionsSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  children?: T;
  showInNavbar?: T;
  showInParent?: T;
  createdBy?: T;
  updatedBy?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "logos_select".
 */
export interface LogosSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  previewImage?: T;
  previewLightBackgroundColor?: T;
  previewDarkBackgroundColor?: T;
  masterFile?: T;
  files?: T;
  showInCollections?: T;
  createdBy?: T;
  updatedBy?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "master-files_select".
 */
export interface MasterFilesSelect<T extends boolean = true> {
  alt?: T;
  createdBy?: T;
  updatedBy?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  createdBy?: T;
  updatedBy?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?: T | {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  role?: T;
  note?: T;
  createdBy?: T;
  updatedBy?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
  sessions?:
    | T
    | {
        id?: T;
        createdAt?: T;
        expiresAt?: T;
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}