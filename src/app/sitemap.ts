import { getPayload } from "payload";
import config from "@payload-config";
import type { MetadataRoute } from "next";
import { env } from "~/env";

export default async function sitemap() {
  const client = await getPayload({ config });

  const collections = await client.find({
    collection: "collections",
    sort: "slug",
    depth: 0,
    limit: 0,
    where: {
      showInNavbar: {
        equals: true,
      },
    },
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  const logos = await client.find({
    collection: "logos",
    sort: "slug",
    depth: 0,
    limit: 0,
    where: {
      showInCollections: {
        equals: true,
      },
    },
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  const collectionSitemap = collections.docs.map((collection) => ({
    url: `${env.BASE_URL}/collections/${collection.slug}`,
    lastModified: new Date(collection.updatedAt),
  })) satisfies MetadataRoute.Sitemap;

  const logoSitemap = logos.docs.map((logo) => ({
    url: `${env.BASE_URL}/logos/${logo.slug}`,
    lastModified: new Date(logo.updatedAt).toISOString(),
  })) satisfies MetadataRoute.Sitemap;

  const sitemap = [...collectionSitemap, ...logoSitemap];

  return sitemap;
}
