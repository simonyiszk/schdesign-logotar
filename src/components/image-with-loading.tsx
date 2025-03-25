"use client";

import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export function ImageWithLoading({
  url,
  alt,
  width,
  height,
  padding,
}: {
  url: string;
  alt: string;
  width: number;
  height: number;
  padding: number;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  const onImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: width - padding,
        height: height - padding,
      }}
    >
      <div style={{
        display: isLoaded ? "none" : "block",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
      }}>
        <CircularProgress />
      </div>
      <Image
        style={{
          objectFit: "contain",
          padding: 10,
        }}
        src={url}
        alt={alt}
        width={width - padding}
        height={height - padding}
        onLoadingComplete={onImageLoad}
      />
    </div>
  );
}
