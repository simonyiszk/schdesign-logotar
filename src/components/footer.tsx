import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "3rem",
        padding: "1rem",
        paddingTop: "3rem",
        backgroundColor: "#2a2a2a",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          columns={2}
        >
          <div
            style={{
              width: "220px",
            }}
          >
            <a
              href="https://simonyi.bme.hu/"
              target="_blank"
            >
              <Image
                src="/schonherz.svg"
                alt="Schönherz Kollégium"
                width={60}
                height={60}
                style={{
                  width: "100%",
                }}
              />
            </a>
          </div>
          <div
            style={{
              width: "60px",
            }}
          >
            <a
              href="https://vik.bme.hu/"
              target="_blank"
            >
              <Image
                src="/vik.svg"
                alt="BME Villamosmérnöki és Informatikai Kar"
                width={60}
                height={60}
                style={{
                  width: "100%",
                }}
              />
            </a>
          </div>
          <div
            style={{
              width: "220px",
            }}
          >
            <a
              href="https://simonyi.bme.hu/"
              target="_blank"
            >
              <Image
                src="/simonyi.svg"
                alt="Simonyi Károly Szakkollégium"
                width={60}
                height={60}
                style={{
                  width: "100%",
                }}
              />
            </a>
          </div>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          justifyContent="space-around"
          alignItems="flex-start"
          columns={2}
        >
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              width: "200px",
            }}
          >
            <div>
              <Typography variant="h6" align="center" color="textPrimary" sx={{ color: "#ffffff" }}>
                Kapcsolat
              </Typography>
            </div>
            <div>
              <Button
                startIcon={<EmailIcon />}
                href="mailto:hello+logotar@schdesign.hu"
                target={"_blank"}
              >
                Hibajelentés
              </Button>
            </div>
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              width: "200px",
            }}
          >
            <div>
              <Typography variant="h6" align="center" color="textPrimary" sx={{ color: "#ffffff" }}>
                Weboldalaink
              </Typography>
            </div>
            <div sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "stretch",
            }}>
              <Button
                size={"medium"}
                href="https://schdesign.hu"
                target={"_blank"}
                sx={{ textTransform: "none" }}
              >
                schdesign.hu
              </Button>
              <Button
                size={"medium"}
                href="https://roadmap.schdesign.hu"
                target={"_blank"}
                sx={{ textTransform: "none" }}
              >
                roadmap.schdesign.hu
              </Button>
            </div>
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              width: "200px",
            }}
          >
            <div>
              <Typography variant="h6" align="center" sx={{ color: "#ffffff" }}>
                Közösségi oldalaink
              </Typography>
            </div>
            <div sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",
            }}>
              <Button
                size="large"
                href="https://www.youtube.com/@schdesignbme/"
                startIcon={<YouTubeIcon />}
                sx={{ textTransform: "none" }}

              >
                @schdesignbme
              </Button>
              <Button
                size="large"
                href="https://www.facebook.com/schdesignbme/"
                startIcon={<FacebookIcon />}
                sx={{ textTransform: "none" }}
              >
                /schdesignbme
              </Button>
              <Button
                size="large"
                href="https://www.instagram.com/schdesign.hu/"
                startIcon={<InstagramIcon />}
                sx={{ textTransform: "none" }}
              >
                @schdesign.hu
              </Button>
              <Button
                size="large"
                href="https://github.com/simonyiszk/"
                startIcon={<GitHubIcon />}
                sx={{ textTransform: "none" }}
              >
                /simonyiszk
              </Button>
            </div>
          </div>
        </Grid>
      </Container>
    </footer>
  );
}
