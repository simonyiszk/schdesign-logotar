import {Tabs, Theme, ThemeProvider} from "@mui/material";
import LinkTab from "./LinkTab";
import React from "react";
import {reszortok} from "../data";

interface NavTabsPros {
    theme: Theme
}

function NavTabs(props: NavTabsPros) {
    const {theme} = props
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Tabs value={value} onChange={handleChange} variant="scrollable">
                {reszortok.map((reszort) =>
                    <LinkTab label={reszort} href={"/"} />
                )}
            </Tabs>
        </ThemeProvider>
    )
}

export default NavTabs
