import { Button, Typography } from "@mui/material";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  return (
    <div>
      <Button color="primary" variant="contained">
        <Typography variant="h1">{slug}</Typography>
      </Button>
    </div>
  );
}
