import { LogoCard } from "~/components/logo-card";
import { Container, Grid } from "@mui/material";
import { collectionChildrenTo2DArray } from "~/utils/collections";
import type { Metadata } from "next";
import type { Params, Props } from "~/utils/types";
import { getCachedCollectionData, getCachedCollectionMetadata, getCollectionSlugs } from "~/utils/payload";

export async function generateStaticParams() {
  const collectionSlugs = await getCollectionSlugs();

  return collectionSlugs.map((slug) => ({
    slug,
  } satisfies Params));
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const collection = await getCachedCollectionMetadata({ slug });

  if (!collection) {
    return;
  }

  const isNoIndex = collection.showInParent;

  return {
    title: collection.name,
    robots: {
      index: isNoIndex,
      follow: true,
    },
  } satisfies Metadata;
}

export default async function CollectionPage({
  params,
}: Props) {
  const { slug } = await params;

  const { collection } = await getCachedCollectionData({ slug });

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
