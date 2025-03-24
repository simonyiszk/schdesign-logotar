import { getPayload } from "payload";
import config from "@payload-config";
import { LogoCard } from "~/components/logo-card";
import { Container, Grid2 } from "@mui/material";

async function getData({
  slug,
}: {
  slug: string;
}) {
  const client = await getPayload({ config });

  const collections = await client.find({
    collection: "logo-collections",
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

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const { collection } = await getData({ slug });

  const variants = collection.variants?.filter((variant) => typeof variant !== "number");

  return (
    <Container maxWidth="xl">
      <Grid2
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        columns={5}
        paddingY={4}
      >
        {variants?.map((variant) => {
          const logos = variant.logos.filter((logo) => typeof logo !== "number");

          return (
            <LogoCard
              key={variant.id}
              variant={variant}
              logos={logos}
            />
          );
        })}
      </Grid2>
      <pre>{JSON.stringify(collection, null, 2)}</pre>
    </Container>
  );
}
