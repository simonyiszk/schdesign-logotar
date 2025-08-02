import { unstable_cache } from "next/cache";
import config from "@payload-config";
import { getPayload } from "payload";
import type { Params } from "./types";

export const getCachedNavbarCollections = unstable_cache(
  async () => {
    const client = await getPayload({ config });

    const collections = await client.find({
      collection: "collections",
      sort: "name", // WTF why is this not working?
      select: {
        name: true,
        showInNavbar: true,
        slug: true,
      },
      where: {
        showInNavbar: {
          equals: true,
        },
      },
    });

    return {
      collections: collections.docs.sort((a, b) => a.name.localeCompare(b.name)),
    };
  },
  undefined,
  {
    tags: ["collections", "navbar"],
    revalidate: false,
  },
);

export const getCachedCollectionMetadata = unstable_cache(
  async ({ slug }: Pick<Params, "slug">) => {

    const client = await getPayload({ config });

    const collections = await client.find({
      collection: "collections",
      sort: "name",
      depth: 0,
      where: {
        slug: {
          equals: slug,
        },
      },
      select: {
        name: true,
      },

    });

    const collection = collections.docs[0];

    return collection;
  },
  undefined,
  {
    tags: ["collections"],
    revalidate: false,
  },
);

export const getCachedCollectionData = unstable_cache(
  async ({
    slug,
  }: {
    slug: string;
  }) => {
    const client = await getPayload({ config });

    const collections = await client.find({
      collection: "collections",
      sort: "name",
      depth: 3,
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    const collection = collections.docs[0];

    if (!collection) {
      throw new Error("Collection not found");
    }

    return {
      collection,
    };
  },
  undefined,
  {
    tags: ["collections"],
    revalidate: false,
  },
);
