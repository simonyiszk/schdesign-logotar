"use client";

import { AppBar, Container, IconButton, Slide, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import { SchdesignIcon } from "./schdesign-icon";
import type { LogoCollection } from "~/payload-types";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type CollectionsNavbarType = Pick<LogoCollection, "id" | "name" | "showInNavbar" | "slug">;

export function Navbar({
  shownCollections,
  allCollections,
}: {
  shownCollections: CollectionsNavbarType[];
  allCollections: CollectionsNavbarType[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState<string | false>(false);

  const firstCollection = shownCollections[0];

  useEffect(() => {
    const collectionSlug = pathname.split("/")[2];

    const isSlugValid = shownCollections.some((collection) => collection.slug === collectionSlug);

    if (isSlugValid && collectionSlug) {
      setValue(collectionSlug);
    }
  }, [shownCollections, pathname]);

  const onTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(`/collections/${newValue}`);
  };

  const onLogoClick = () => {
    setValue(false);
    router.push("/");
  };

  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={1} variant="elevation" color="default">
          <Container maxWidth="xl">
            <Toolbar>
              <IconButton
                size="large"
                color="primary"
                sx={{
                  mr: 2,
                }}
                onClick={onLogoClick}
              >
                <SchdesignIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Logótár
              </Typography>
              {firstCollection && (
                <Tabs
                  value={value}
                  onChange={onTabChange}
                  sx={{
                    ml: 2,
                  }}
                  textColor="primary"
                  indicatorColor="primary"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                >
                  {shownCollections.map((collection) => (
                    <Tab key={collection.slug} label={collection.name} value={collection.slug} />
                  ))}
                </Tabs>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
}
