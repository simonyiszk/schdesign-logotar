import React, { useState } from "react"
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

function loadPageFromStorage() {
  let jsonPage = localStorage.getItem("page")
  
  if (jsonPage) {
    let page = parseInt(JSON.parse(jsonPage))
    if (page >= 0 && page < collections.length) {
      return page
    }
  }

  savePageToStorage(0)

  return 0
}

function savePageToStorage(value: number) {
  localStorage.setItem("page", JSON.stringify(value))
}

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const [page, setPage] = useState(loadPageFromStorage)

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
    () => createTheme(prefersDarkMode ? darkTheme : lightTheme),
    [darkTheme, lightTheme, prefersDarkMode]
  )

  const pageChangeHandler = (value: number) => {
    savePageToStorage(value)
    setPage(value)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        page={page}
        reszortok={collections}
        onClick={(value: number) => pageChangeHandler(value)}
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
