"use client";

import { Button, Typography } from "@mui/material";
import { useState } from "react";

export function LogoCardDownloadButton({
  label,
  url,
  fileName,
}: {
  label: string;
  url: string;
  fileName: string;
}) {
  const [isDownloading, setIsDownloading] = useState(false);

  const onButtonClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDownloading(true);

    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const urlObject = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = urlObject;
      a.download = fileName;
      a.click();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      loading={isDownloading}
      onClick={onButtonClick}
      variant="contained"
      color="primary"
      component="a"
      href={url}
      target="_self"
      download
      sx={{
        flexGrow: 1,
      }}
    >
      <Typography variant="body1">
        {label}
      </Typography>
    </Button>
  );
}
