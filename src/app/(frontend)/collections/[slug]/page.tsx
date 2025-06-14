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

type LogoCompositeType = {
    relationTo: "collections";
    value: number | Collection;
} | {
    relationTo: "logos";
    value: number | Logo;
}

function logoTreeToArrayOfLogos({
  composite,
  separateLogos,
}: {
  composite: LogoCompositeType[];
  separateLogos: boolean;
}) {
  const result: Logo[][] = [];
  const combinedLogos: Logo[] = [];

  composite.forEach((item) => {

    if (item.relationTo === "logos") {
      const logo = item.value;

      if (
        typeof logo === "number" ||
        typeof logo.previewImage === "number" ||
        typeof logo.masterFile === "number" ||
        logo.files?.some((file) => typeof file === "number") ||
        !logo.showInCollections
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

      if (
        typeof collection === "number" ||
        !collection.children ||
        collection.children.length === 0 ||
        collection.children.some((child) => typeof child === "number") ||
        !collection.showInParent
      ) {
        return;
      }

      const childLogos = logoTreeToArrayOfLogos({
        composite: collection.children,
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
        {logoTreeToArrayOfLogos({
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
