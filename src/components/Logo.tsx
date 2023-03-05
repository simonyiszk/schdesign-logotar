import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material"
import type { ILink } from "../data"
import { useEffect, useState } from "react"

interface LogoProps {
  name: string
  preview: string
  links: Array<ILink>
}

function downloadFile(
  e: React.SyntheticEvent,
  name: string,
  url: string,
  extension: string
) {
  e.preventDefault()

  const link = document.createElement("a")
  link.href = url
  link.download = name + "." + extension
  link.click()
}

export function Logo(props: LogoProps) {
  const { name, preview, links } = props

  const [src, setSrc] = useState("")

  useEffect(() => {
    const dummyImgUrl = "https://dummyimage.com/280x210/999/fff"
    const img = new Image()
    img.src = preview === "" ? dummyImgUrl : preview
    img.onload = () => {
      setSrc(img.src)
    }
  })

  const bg =
    useTheme().palette.mode === "dark"
      ? "rgb(81, 81, 81)"
      : "rgb(229, 229, 229)"

  const width = 290
  const height = 210
  const padding = 20

  return (
    <Card>
      {src === "" ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            width: width - padding,
            height: height - padding,
          }}
        />
      ) : (
        <CardMedia
          sx={{
            height: height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: bg,
          }}
        >
          <img
            style={{
              objectFit: "contain",
              padding: 10,
            }}
            width={width - padding}
            height={height - padding}
            src={src}
            alt={name}
          />
        </CardMedia>
      )}

      <CardContent>
        <Typography component="div" align={"center"}>
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        {links.map((link, index) => (
          <Button
            disabled={link.url === ""}
            href={link.url}
            key={index}
            onClick={(e) => downloadFile(e, name, link.url, link.name)}
          >
            {link.name}
          </Button>
        ))}
      </CardActions>
    </Card>
  )
}
