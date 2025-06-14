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
    depth: 4,
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
  elements,
  separateLogos,
}: {
  elements: ({
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

  elements.forEach((element) => {
    if (typeof element.value === "number") {
      return;
    }

    if (element.relationTo === "logos") {
      const logo = element.value;

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

    if (element.relationTo === "collections") {
      const collection = element.value;

      if (collection.showInParent === false) {
        return;
      }

      if (!collection.children) {
        return;
      }

      const childLogos = recursiveLogoArray({
        elements: collection.children,
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

  const arrayB = recursiveLogoArray({
    elements: children ?? [],
    separateLogos: true,
  });

  const arrayA: (Logo[])[] = [];

  // Note: This should be a recursive function, but for now we just flatten the tree to an array of arrays
  children?.forEach((child) => {
    if (child.relationTo === "logos") {
      if (typeof child.value !== "number") {
        arrayA.push([child.value as Logo]);
      }
    }

    if (child.relationTo === "collections") {
      if (typeof child.value !== "number") {

        if ((child.value as Collection).showInParent === false) {
          return;
        }

        const arr: Logo[] = [];

        ((child.value as Collection).children)?.forEach((grandChild) => {
          if (grandChild.relationTo === "logos" && typeof grandChild.value !== "number") {
            arr.push(grandChild.value as Logo);
          }
        });

        arrayA.push(arr);
      }
    }
  });

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
        {arrayB.map((child, index) => {
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
