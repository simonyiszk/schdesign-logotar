import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Navbar } from "~/components/navbar";
import { CssBaseline } from "@mui/material";
import { Footer } from "~/components/footer";

import "@mui/material-pigment-css/styles.css";
import { getCachedNavbarCollections } from "~/utils/payload";

export const metadata = {
  metadataBase: new URL("https://logotar.schdesign.hu"),
  title: {
    default: "Logótár",
    template: "%s - Logótár",
  },
  description: "Az schdesign Logótár tartalmazza a Schönherz kollégium köreinek logóit.",
  openGraph: {
    type: "website",
    locale: "hu",
    images: [
      {
        url: "/thumbnail.png",
        width: 960,
        height: 540,
        alt: "Az schdesign Logótár tartalmazza a Schönherz kollégium köreinek logóit.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/thumbnail.png",
        width: 960,
        height: 540,
        alt: "Az schdesign Logótár tartalmazza a Schönherz kollégium köreinek logóit.",
      },
    ],
  },
} satisfies Metadata;

export const viewport = {
  themeColor: "#f8485e",
} satisfies Viewport;

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto-font-family",
});

export default async function RootLayour({
  children,
}: {
  children: React.ReactNode;
}) {
  const { collections } = await getCachedNavbarCollections();

  return (
    <html lang="hu">
      <body className={roboto.className} style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <AppRouterCacheProvider>
          <CssBaseline />
          <div>
            <Navbar
              shownCollections={collections}
            />
          </div>
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
