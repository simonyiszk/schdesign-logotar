import { Box, useTheme } from "@mui/material"
import React from "react"

interface BrandLogoProps {
  mr: number
}

function BrandLogo(props: BrandLogoProps) {
  const theme = useTheme()
  const path = theme.palette.mode === "dark" ? "logo-pink.svg" : "logo.svg"

  return (
    <Box
      component={"img"}
      sx={{ mr: props.mr, width: 40 }}
      alt={"BrandLogo of schdesign"}
      src={path}
    />
  )
}

export default BrandLogo
