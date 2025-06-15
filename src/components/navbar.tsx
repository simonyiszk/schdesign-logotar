"use client";

import { AppBar, Container, IconButton, List, ListItemButton, ListItemText, Slide, SwipeableDrawer, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import { SchdesignIcon } from "./schdesign-icon";
import type { Collection } from "~/@generated/payload-types";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";

type CollectionsNavbarType = Pick<Collection, "id" | "name" | "showInNavbar" | "slug">;

export function Navbar({
  shownCollections,
}: {
  shownCollections: CollectionsNavbarType[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const trigger = useScrollTrigger();

  const [slug, setSlug] = useState<string | false>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (newIsDrawerOpen: boolean) => () => {
    setIsDrawerOpen(newIsDrawerOpen);
  };

  const firstCollection = shownCollections[0];
  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    const collectionSlug = pathname.split("/")[2];

    const isSlugValid = shownCollections.some((collection) => collection.slug === collectionSlug);

    if (isSlugValid && collectionSlug) {
      setSlug(collectionSlug);
    }
  }, [shownCollections, pathname]);

  const onTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setSlug(newValue);
    router.push(`/collections/${newValue}`);
  };

  const onLogoClick = () => {
    setSlug(false);
    router.push("/");
  };


  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={1} variant="elevation" color="default">
          <Container maxWidth="xl">
            <Toolbar sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <IconButton
                size="large"
                color="primary"
                sx={{
                  mr: {
                    xs: 0,
                    sm: 2,
                  },
                }}
                onClick={onLogoClick}
              >
                <SchdesignIcon />
              </IconButton>
              <Typography variant="h6" sx={{
                flexGrow: {
                  xs: 0,
                  sm: 1,
                },
              }}>
                Logótár
              </Typography>
              {firstCollection
                ? (
                  <>
                    <IconButton
                      size="large"
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer(true)}
                      sx={{
                        display: {
                          xs: "flex",
                          sm: "none",
                        },
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                      sx={{
                        display: {
                          xs: "block",
                          sm: "none",
                        },
                      }}
                      disableBackdropTransition={!iOS}
                      disableDiscovery={iOS}
                      anchor={"right"}
                      open={isDrawerOpen}
                      onClose={toggleDrawer(false)}
                      onOpen={toggleDrawer(true)}
                    >
                      <div
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                      >
                        <List>
                          {shownCollections.map((collection) => (
                            <ListItemButton
                              key={collection.id}
                              selected={collection.slug === slug}
                              onClick={(e) => { onTabChange(e, collection.slug); }}
                            >
                              <ListItemText
                                primary={collection.name}
                                sx={{ textTransform: "uppercase" }}
                              />
                            </ListItemButton>
                          ))}
                        </List>
                      </div>
                    </SwipeableDrawer>
                    <Tabs
                      value={slug}
                      onChange={onTabChange}
                      sx={{
                        display: {
                          xs: "none",
                          sm: "flex",
                        },
                        ml: 2,
                      }}
                      textColor="primary"
                      indicatorColor="primary"
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                    >
                      {shownCollections.map((collection) => (
                        <Tab key={collection.id} label={collection.name} value={collection.slug} />
                      ))}
                    </Tabs>
                  </>
                ) : (
                  null
                )}
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
}
