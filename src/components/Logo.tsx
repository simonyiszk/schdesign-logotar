import {Box, useTheme} from "@mui/material";
import React from "react";

interface LogoProps {
    mr: number
}

function Logo(props: LogoProps) {
    const theme = useTheme()
    const path = theme.palette.mode === 'dark' ? "logo-pink.svg" : "logo.svg"

    return <Box
        component={"img"}
        sx={{mr: props.mr, width: 40}}
        alt={"Logo of schdesign"}
        src={path}
    />
}

export default Logo
