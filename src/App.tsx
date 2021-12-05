import React, {useState} from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
    createTheme,
    CssBaseline, ThemeProvider,
    useMediaQuery
} from "@mui/material";
import Header from "./components/Header";
import {collections} from "./data";



function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [page, setPage] = useState(0);

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    primary: {
                        light: '#ff7e8b',
                        main: '#f8485e',
                        dark: '#bf0035',
                        contrastText: '#fff',
                    },
                    secondary: {
                        light: '#acb8ff',
                        main: '#7b88cc',
                        dark: '#4b5b9b',
                        contrastText: '#000',
                    },
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header page={page} reszortok={collections} onClick={(value: number) => setPage(value)}/>
        </ThemeProvider>
    );
}

export default App;
