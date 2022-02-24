import GitHubIcon from "@mui/icons-material/GitHub"
import YouTubeIcon from "@mui/icons-material/YouTube"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import EmailIcon from "@mui/icons-material/Email"
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material"
import { ReactElement } from "react"

interface CustomIconButtonProps {
  href: string
  icon: ReactElement<any, any>
}

function CustomIconButton(props: CustomIconButtonProps) {
  return (
    <IconButton
      color={"primary"}
      size={"large"}
      href={props.href}
      target={"_blank"}
    >
      {props.icon}
    </IconButton>
  )
}

function Footer() {
  const theme = useTheme()
  const bgColor = theme.palette.mode === "dark" ? "#2a2a2a" : "#f0f0f0"
  const txtColor = theme.palette.mode === "dark" ? "white" : "black"

  return (
    <Box padding={4} sx={{ backgroundColor: bgColor }}>
      <Container maxWidth={"xl"}>
        <Grid
          container
          spacing={4}
          justifyContent="space-around"
          alignItems="center"
          columns={2}
        >
          <Grid item>
            <Box>
              <Typography variant="h6" align="center" color={txtColor}>
                Kapcsolat
              </Typography>
            </Box>
            <Box>
              <Button
                startIcon={<EmailIcon />}
                href="mailto:vezetoseg+logotar@schdesign.hu"
                target={"_blank"}
              >
                Hibajelentés
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="h6" align="center" color={txtColor}>
                Weboldalaink
              </Typography>
            </Box>
            <Box>
              <Button
                size={"medium"}
                href="https://schdesign.hu"
                target={"_blank"}
              >
                schdesign.hu
              </Button>
              <Button
                size={"medium"}
                href="https://roadmap.schdesign.hu"
                target={"_blank"}
              >
                Roadmap
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="h6" align="center" color={txtColor}>
                Közösségi oldalaink
              </Typography>
            </Box>
            <Box>
              <CustomIconButton
                href={
                  "https://www.youtube.com/channel/UCrpoUHr-I8VjjLgXUz-AV6Q/"
                }
                icon={<YouTubeIcon />}
              />
              <CustomIconButton
                href={"https://www.facebook.com/schdesignbme"}
                icon={<FacebookIcon />}
              />
              <CustomIconButton
                href={"https://www.instagram.com/schdesign.hu/"}
                icon={<InstagramIcon />}
              />
              <CustomIconButton
                href={"https://github.com/simonyiszk/schdesign-logotar"}
                icon={<GitHubIcon />}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
