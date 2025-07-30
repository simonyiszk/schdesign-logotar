import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Navbar } from "~/components/navbar";
import { CssBaseline } from "@mui/material";
import { Footer } from "~/components/footer";
import { getPayload } from "payload";
import config from "@payload-config";

import "@mui/material-pigment-css/styles.css";
import { unstable_cache } from "next/cache";

export const metadata = {
  title: {
    default: "Logótár",
    template: "%s - Logótár",
  },
  description: "Az schdesign Logótár tartalmazza a Schönherz kollégium köreinek logóit.",
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

const getData = unstable_cache(async () => {
  const client = await getPayload({ config });

  const collections = await client.find({
    collection: "collections",
    sort: "name", // WTF why is this not working?
    select: {
      name: true,
      showInNavbar: true,
      slug: true,
    },
    where: {
      showInNavbar: {
        equals: true,
      },
    },
  });

  return {
    collections: collections.docs.sort((a, b) => a.name.localeCompare(b.name)),
  };
}, ["navbar-collections"], {
  tags: ["collections"],
  revalidate: false,
});

export default async function RootLayour({
  children,
}: {
  children: React.ReactNode;
}) {
  const { collections } = await getData();

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
