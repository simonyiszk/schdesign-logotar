import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Logo, LogoVariant } from "~/payload-types";
import { LogoCardDownloadButton } from "./logo-card-download-button";
import { ImageWithLoading } from "./image-with-loading";

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

  const previewImage = typeof firstLogo.previewImage === "number" ? undefined : firstLogo.previewImage;
  const masterFile = typeof firstLogo.masterFile === "number" ? undefined : firstLogo.masterFile;
  const files = firstLogo.files?.filter((file) => typeof file !== "number");

  const downloadableFiles =
    masterFile
      ? files
        ? [masterFile, ...files]
        : [masterFile]
      : files;

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
        <ImageWithLoading
          url={previewImage?.url ?? ""}
          alt={previewImage?.alt ?? ""}
          width={width}
          height={height}
          padding={padding}
        />
      </CardMedia>
      <CardContent>
        <Typography variant="h5" align={"center"}>{variant.name}</Typography>
      </CardContent>
      <CardActions>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 8,
          width: width - padding,
        }}>
          {downloadableFiles?.map((file) => {
            const extension = file.url?.split(".").pop();

            return (
              <LogoCardDownloadButton
                key={file.id}
                label={extension ?? ""}
                url={file.url ?? ""}
                fileName={file.filename ?? ""}
              />
            );
          })}
        </div>
      </CardActions>
    </Card>
  );
}
