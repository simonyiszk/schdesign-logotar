/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ExtendTheme } from "@pigment-css/react";
import type { Theme, SxProps } from "@mui/material/styles";
import type { Config } from "./payload-types";

declare module "@pigment-css/react/theme" {
  interface ThemeTokens {
    "max-width": string;
    "border-radius": string;
    "font-mono": string;
    "foreground-rgb": string;
    "background-start-rgb": string;
    "background-end-rgb": string;
    "primary-glow": string;
    "secondary-glow": string;
    title: {
      "start-rgb": string;
      "end-rgb": string;
      border: string;
    };
    callout: {
      rgb: string;
      "border-rgb": string;
    };
    card: {
      rgb: string;
      "border-rgb": string;
    };
  }

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light" | "dark";
      tokens: ThemeTokens;
    }>;
  }
}

declare module "@mui/material-pigment-css" {
  interface ThemeArgs {
    theme: Theme;
  }
}

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      sx?: SxProps<Theme>;
    }
    interface SVGProps<T> {
      sx?: SxProps<Theme>;
    }
  }
}

declare module "payload" {
  export interface GeneratedTypes extends Config {}
}
