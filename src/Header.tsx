import React from "react";
import {
    AppBar, Box, createTheme, IconButton, Slide,
    styled, Toolbar,
    Typography,
    useMediaQuery,
    useScrollTrigger
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NavTabs from "./components/NavTabs";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function HideOnScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function Header() {

    const theme =
            createTheme({
                palette: {
                    primary: {
                        main: '#fff',
                    },
                },
            })
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <HideOnScroll>
                <AppBar position="fixed">
                    <Toolbar sx={{display: 'flex', justifyContent: 'space-between' }}>
                        {isMobile ? (
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <Box
                                component={"img"}
                                sx={{mr: 2, width: 40}}
                                alt={"Logo of schdesign"}
                                src={"logo.svg"}
                            />
                        )}
                        <Typography variant="h6" sx={{ flexGrow: isMobile ? 0 : 1 }}>
                            Logótár
                        </Typography>
                        {isMobile ? (
                            <Box
                                component={"img"}
                                sx={{width: 40}}
                                alt={"Logo of schdesign"}
                                src={"logo.svg"}
                            />
                        ) : (
                            <NavTabs theme={theme}/>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Offset/>
        </>
    )
}

export default Header
