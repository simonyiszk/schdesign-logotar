import { getPayload } from "payload";
import config from "@payload-config";
import { LogoCard } from "~/components/logo-card";
import { Container, Grid } from "@mui/material";
import { collectionChildrenTo2DArray } from "~/utils/collections";
import type { Metadata } from "next";
import { unstable_cache } from "next/cache";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>
  searchParams: Promise<Record<string, string | string[] | undefined>>
};

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const getCachedCollectionMetadata = unstable_cache(
    async () => {

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
    [`collections-${slug}`],
    {
      tags: ["collections", `collections-${slug}`],
      revalidate: false,
    },
  );

  const collection = await getCachedCollectionMetadata();

  if (!collection) {
    return;
  }

  return {
    title: collection.name,
  } satisfies Metadata;
}

async function getData({ slug }: Params) {
  const getCachedCollectionData = unstable_cache(
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
    [`collections-${slug}`],
    {
      tags: ["collections", `collections-${slug}`],
      revalidate: false,
    },
  );

  return getCachedCollectionData({ slug });
}

export default async function CollectionPage({
  params,
}: Props) {
  const { slug } = await params;

  const { collection } = await getData({ slug });

  const children = collection.children?.filter((child) => typeof child !== "number");

  if (!children || children.length === 0) {
    throw new Error(`No logos found in collection: ${slug}`);
  }

  return (
    <Container maxWidth="xl"
      style={{
        flexGrow: 1,
      }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        columns={5}
        paddingY={4}
        paddingX={2}
      >
        {collectionChildrenTo2DArray({
          composite: children,
          separateLogos: true,
        }).map((child, index) => {
          return (
            <LogoCard
              key={index}
              logos={child}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
