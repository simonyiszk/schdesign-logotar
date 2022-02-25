import React, { useEffect, useState } from "react"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material"
import Header from "./components/Header"
import { collections } from "./data/data"
import LogoLibrary from "./containers/LogoLibrary"
import Footer from "./components/Footer"

enum PreferredTheme {
  Light = "LIGHT",
  Dark = "DARK",
  Os = "OS",
}

function loadPageFromStorage() {
  let savedPage = localStorage.getItem("page")

  if (savedPage) {
    let page = parseInt(JSON.parse(savedPage))
    if (page >= 0 && page < collections.length) {
      return page
    }
  }

  savePageToStorage(0)

  return 0
}

function loadPreferredThemeFromStorage(
  prefersDarkMode: boolean
): PreferredTheme {
  let savedTheme = localStorage.getItem("preferredTheme")
  let theme: PreferredTheme

  if (savedTheme !== null) {
    savedTheme = JSON.parse(savedTheme)
    theme =
      savedTheme === "LIGHT"
        ? PreferredTheme.Light
        : savedTheme === "DARK"
        ? PreferredTheme.Dark
        : PreferredTheme.Os
  } else {
    theme = PreferredTheme.Os
    localStorage.setItem("preferredTheme", JSON.stringify("OS"))
  }

  if (theme === PreferredTheme.Os) {
    if (prefersDarkMode) return PreferredTheme.Dark
    return PreferredTheme.Light
  }

  return theme
}

function savePageToStorage(value: number) {
  localStorage.setItem("page", JSON.stringify(value))
}

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const [page, setPage] = useState(loadPageFromStorage)
  const [prefTheme, setPrefTheme] = useState(PreferredTheme.Light)

  useEffect(() => {
    setPrefTheme(loadPreferredThemeFromStorage(prefersDarkMode))
  }, [prefersDarkMode])

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        light: "#ff7e8b",
        main: "#f8485e",
        dark: "#bf0035",
        contrastText: "#fff",
      },
      secondary: {
        light: "#acb8ff",
        main: "#7b88cc",
        dark: "#4b5b9b",
        contrastText: "#000",
      },
    },
  })

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        light: "#acb8ff",
        main: "#7b88cc",
        dark: "#4b5b9b",
        contrastText: "#000",
      },
      secondary: {
        light: "#ff7e8b",
        main: "#f8485e",
        dark: "#bf0035",
        contrastText: "#fff",
      },
    },
  })

  const theme = React.useMemo(
    () =>
      createTheme(prefTheme === PreferredTheme.Light ? lightTheme : darkTheme),
    [darkTheme, lightTheme, prefTheme]
  )

  const pageChangeHandler = (value: number) => {
    savePageToStorage(value)
    setPage(value)
  }

  const themeChangeHandler = () => {
    if (prefTheme === PreferredTheme.Light) {
      setPrefTheme(PreferredTheme.Dark)
    } else {
      setPrefTheme(PreferredTheme.Light)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        page={page}
        reszortok={collections}
        pageChangeHandler={(value: number) => pageChangeHandler(value)}
        themeChangeHandler={() => themeChangeHandler()}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        sx={{ minHeight: "calc(100vh - 64px)" }}
      >
        <LogoLibrary key={page} logos={collections[page].logos} />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
