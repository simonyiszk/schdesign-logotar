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
  Modal,
  Typography,
  useTheme,
} from "@mui/material"
import { ReactElement, useState } from "react"

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

  const [open, setOpen] = useState(false)

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
              <IconButton
                onClick={() => setOpen(true)}
                color={"primary"}
                size={"large"}
              >
                ?
              </IconButton>
              <Modal open={open} onClose={() => setOpen(false)}>
                <Box
                  style={{
                    position: "absolute" as "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    backgroundColor: "black",
                  }}
                >
                  <Typography variant="body1" color="white">
                    UWU a macska, aki később világuralomra tör. Beware of uwu!
                  </Typography>
                </Box>
              </Modal>
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
