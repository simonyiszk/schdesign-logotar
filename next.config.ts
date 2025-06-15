import { withPayload } from "@payloadcms/next/withPayload";
import { withPigment, type PigmentOptions } from "@pigment-css/nextjs-plugin";
import { extendTheme } from "@mui/material/styles";
import type { NextConfig } from "next";
import "./src/env";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

const pigmentConfig = {
  transformLibraries: ["@mui/material"],
  theme: extendTheme({
    typography: {
      fontFamily: "var(--roboto-font-family)",
    },
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#f8485e",
          },
          secondary: {
            main: "#7b88cc",
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: "#f8485e",
          },
          secondary: {
            main: "#7b88cc",
          },
        },
      },
    },
    defaultColorScheme: "dark",
  }),
} satisfies PigmentOptions;

export default withPayload(withPigment(nextConfig, pigmentConfig));
