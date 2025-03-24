import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import type { Logo, LogoVariant } from "~/payload-types";

export function LogoCard({
  logos,
  variant,
}: {
  logos: Logo[];
  variant: LogoVariant;
}) {
  const firstLogo = logos[0];

  if (!firstLogo) {
    return null;
  }

  const previewImage = typeof firstLogo.previewImage === "number" ? null : firstLogo.previewImage;

  const width = 290;
  const height = 210;
  const padding = 20;

  return (
    <Card>
      <CardMedia
        sx={{
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(229, 229, 229)",
        }}
      >
        <Image
          style={{
            objectFit: "contain",
            padding: 10,
          }}
          src={previewImage?.url ?? ""}
          alt={previewImage?.alt ?? ""}
          width={width - padding}
          height={height - padding}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="h5" align={"center"}>{variant.name}</Typography>
      </CardContent>
    </Card>
  );
}
