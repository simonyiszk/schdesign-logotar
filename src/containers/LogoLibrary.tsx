import { ILogo } from "../data/data"
import { Box, Container, Grid, Zoom } from "@mui/material"
import { Logo } from "../components"

interface LogoLibraryProps {
  logos: Array<ILogo>
}

export function LogoLibrary(props: LogoLibraryProps) {
  const { logos } = props

  return (
    <Box sx={{ padding: 4 }}>
      <Container maxWidth={"xl"}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          columns={5}
        >
          {logos.map((logo, index) => (
            <Zoom
              key={index}
              in={true}
              timeout={500}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Grid item>
                <Logo
                  name={logo.name}
                  preview={logo.preview}
                  links={logo.links}
                />
              </Grid>
            </Zoom>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
