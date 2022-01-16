import React, { useState } from "react"
import {
  AppBar,
  Box,
  Container,
  createTheme,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Slide,
  styled,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import NavTabs from "./NavTabs"
import BrandLogo from "./BrandLogo"
import { ICollection } from "../data/data"

interface Props {
  children: React.ReactElement
}

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar)

function HideOnScroll(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

interface HeaderProps {
  page: number
  reszortok: Array<ICollection>
  onClick: (value: number) => void
}

function Header(props: HeaderProps) {
  const { page, reszortok, onClick } = props

  const theme = useTheme()
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  const appBarBgColor =
    theme.palette.mode === "dark" ? "#2a2a2a" : theme.palette.primary.main

  const navTabsTheme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      text: {
        secondary: "rgba(255, 255, 255, 0.7)",
      },
    },
  })
  const isMobile = useMediaQuery(navTabsTheme.breakpoints.down("sm"))

  const [state, setState] = useState(false)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState(open)
    }

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" sx={{ backgroundColor: appBarBgColor }}>
          <Container maxWidth={"xl"}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <BrandLogo mr={isMobile ? 0 : 2} />
              <Typography variant="h6" sx={{ flexGrow: isMobile ? 0 : 1 }}>
                Logótár
              </Typography>
              {isMobile ? (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <NavTabs
                  theme={navTabsTheme}
                  reszortok={reszortok}
                  page={page}
                  onClick={onClick}
                />
              )}

              <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                anchor={"right"}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {reszortok.map((reszort, index) => (
                      <ListItemButton
                        key={index}
                        selected={index === page}
                        onClick={() => onClick(index)}
                      >
                        <ListItemText
                          primary={reszort.name}
                          sx={{ textTransform: "uppercase" }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              </SwipeableDrawer>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Offset />
    </>
  )
}

export default Header
