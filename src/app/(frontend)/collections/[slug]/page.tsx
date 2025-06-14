import { getPayload } from "payload";
import config from "@payload-config";
import { LogoCard } from "~/components/logo-card";
import { Container, Grid } from "@mui/material";
import type { Collection, Logo } from "~/payload-types";

async function getData({
  slug,
}: {
  slug: string;
}) {
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
}


function recursiveLogoArray({
  items,
  separateLogos,
}: {
  items: ({
    relationTo: "collections";
    value: number | Collection;
} | {
    relationTo: "logos";
    value: number | Logo;
})[];
  separateLogos: boolean;
}): Logo[][] {
  const result: Logo[][] = [];
  const combinedLogos: Logo[] = [];

  items.forEach((item) => {
    if (typeof item.value === "number") {
      return;
    }

    if (item.relationTo === "logos") {
      const logo = item.value;

      if (
        logo.showInCollections === false ||
        typeof logo.previewImage === "number" ||
        typeof logo.masterFile === "number" ||
        logo.files?.some((file) => typeof file === "number")
      ) {
        return;
      }

      if (separateLogos) {
        result.push([logo]);
      } else {
        combinedLogos.push(logo);
      }
    }

    if (item.relationTo === "collections") {
      const collection = item.value;

      if (!collection.showInParent) {
        return;
      }

      if (!collection.children) {
        return;
      }

      const childLogos = recursiveLogoArray({
        items: collection.children,
        separateLogos: false, // We don't want to separate logos in child collections
      });

      if (childLogos.length > 0) {
        result.push(...childLogos);
      }
    }
  });

  if (!separateLogos && combinedLogos.length > 0) {
    result.push(combinedLogos);
  }

  return result;
}


export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
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
        {recursiveLogoArray({
          items: children,
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
