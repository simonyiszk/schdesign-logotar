import React, { useState } from "react"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import {
  createTheme,
  CssBaseline,
  Divider,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material"
import Header from "./components/Header"
import { collections } from "./data/data"
import LogoLibrary from "./containers/LogoLibrary"
import Footer from "./components/Footer"

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const [page, setPage] = useState(0)

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        page={page}
        reszortok={collections}
        onClick={(value: number) => setPage(value)}
      />
      <LogoLibrary key={page} logos={collections[page].logos} />
      <Divider />
      <Footer />
    </ThemeProvider>
  )
}

export default App
