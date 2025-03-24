import { getPayload } from "payload";
import config from "@payload-config";

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

  return (
    <div
      sx={{

      }}
    >
      <pre>{JSON.stringify(collection, null, 2)}</pre>
    </div>
  );
}
