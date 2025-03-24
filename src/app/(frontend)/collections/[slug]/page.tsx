import { Button, Typography } from "@mui/material";

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  // wait 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div
      sx={{

      }}
    >
      <Button color="primary" variant="contained">
        <Typography variant="h1">{slug}</Typography>
      </Button>
    </div>
  );
}
