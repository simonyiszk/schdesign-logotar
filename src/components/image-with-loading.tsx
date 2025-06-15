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
        backgroundColor: "rgb(229, 229, 229)",
        position: "relative",
        width: width,
        height: height,
        padding: padding,
      }}
    >
      <div
        style={{
          display: isLoaded ? "none" : "block",
          position: "absolute",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
        }}
      >
        <CircularProgress />
      </div>
      <Image
        style={{
          visibility: isLoaded ? "visible" : "hidden",
          objectFit: "contain",
          padding: padding,
        }}
        src={url}
        alt={alt}
        width={width - 2*padding}
        height={height - 2*padding}
        onLoad={onImageLoad}
      />
    </div>
  );
}
