"use client";

import { Card, CardActions, CardContent, FormControl, MenuItem, Select, Typography } from "@mui/material";
import type { Logo } from "~/@generated/payload-types";
import { LogoCardDownloadButton } from "./logo-card-download-button";
import { ImageWithLoading } from "./image-with-loading";
import { useState } from "react";

export function LogoCard({
  logos,
}: {
  logos: Logo[];
}) {
  const [logo, setLogo] = useState<Logo | undefined>(logos[0]);

  if (!logo) {
    return null;
  }

  const previewImage = typeof logo.previewImage === "number" ? undefined : logo.previewImage;
  const sourceFile = typeof logo.sourceFile === "number" ? undefined : logo.sourceFile;
  const files = logo.files?.filter((file) => typeof file !== "number");

  const downloadableFiles =
    sourceFile
      ? files
        ? [sourceFile, ...files]
        : [sourceFile]
      : files;

  const width = 290;
  const height = 210;
  const padding = 20;

  const widthInPx = `${(width - padding).toString()}px`;

  return (
    <Card>
      <ImageWithLoading
        key={logo.id}
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
          <Typography variant="body1" align={"center"}>{logo.name}</Typography>
        ) : (
          <FormControl fullWidth sx={{ width: "250px" }}>
            <Select
              value={logo.id}
              onChange={(e) => {
                const selectedLogo = logos.find((l) => l.id === e.target.value);
                setLogo(selectedLogo);
              }}
              disabled={logos.length === 1}
              variant="standard"
            >
              {logos.map((l) => (
                <MenuItem key={l.id} value={l.id}>
                  <Typography variant="body1" align={"center"} sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingRight: "16px" }}>{l.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
