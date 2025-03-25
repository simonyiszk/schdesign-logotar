"use client";

import { Card, CardActions, CardContent, MenuItem, Select, Typography } from "@mui/material";
import type { Logo, LogoVariant } from "~/payload-types";
import { LogoCardDownloadButton } from "./logo-card-download-button";
import { ImageWithLoading } from "./image-with-loading";
import { useState } from "react";

export function LogoCard({
  logos,
  variant,
}: {
  logos: Logo[];
  variant: LogoVariant;
}) {
  const [logo, setLogo] = useState<Logo | undefined>(logos[0]);

  if (!logo) {
    return null;
  }

  const previewImage = typeof logo.previewImage === "number" ? undefined : logo.previewImage;
  const masterFile = typeof logo.masterFile === "number" ? undefined : logo.masterFile;
  const files = logo.files?.filter((file) => typeof file !== "number");

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
      <ImageWithLoading
        url={previewImage?.url ?? ""}
        alt={previewImage?.alt ?? ""}
        width={width}
        height={height}
        padding={padding}
      />
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 64,
      }}>
        {logos.length === 1 ? (
          <Typography variant="body1" align={"center"}>{variant.name}</Typography>
        ) : (
          <Select
            fullWidth
            value={logo.id}
            onChange={(e) => {
              const selectedLogo = logos.find((l) => l.id === e.target.value);
              setLogo(selectedLogo);
            }}
            disabled={logos.length === 1}
            variant="standard"
            inputProps={{
              sx: {
                textAlign: "center",
              },
            }}
          >
            {logos.map((l) => (
              <MenuItem key={l.id} value={l.id}>{l.name}</MenuItem>
            ))}
          </Select>
        )}

      </CardContent>
      <CardActions>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "8px",
          width: `${(width - padding).toString()}px`,
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
