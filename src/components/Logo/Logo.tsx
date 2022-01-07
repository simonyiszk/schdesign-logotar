import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Skeleton,
    Typography
} from "@mui/material";
import {ILink} from "../../data/data";
import React, {useEffect} from "react";

interface LogoProps {
    name: string
    preview: string
    links: Array<ILink>
}

function downloadFile(e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, name: string, url: string, extension: string) {
    e.preventDefault()

    const link = document.createElement("a")
    link.href = url
    link.download = name + "." + extension
    link.click()
}

function Logo(props: LogoProps) {

    const {name, preview, links} = props

    const [src, setSrc] = React.useState("");

    useEffect(() => {
        const dummyImgUrl = "https://dummyimage.com/280x210/999/fff"
        const img = new Image()
        img.src = preview === "" ? dummyImgUrl : preview
        img.onload = () => {
            setSrc(img.src)
        }
    })

    return (
        <Card sx={{ maxWidth: 280 }}>
            { src === "" ? (
                <Skeleton animation="wave" variant="rectangular" width={280} height={210} />
            ) : (
                <CardMedia sx={{width: 280, height: 210, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
                    <img
                        style={{objectFit: "contain"}}
                        width={280 - 20}
                        height={210 - 20}
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
            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                {links.map((link, index) =>
                    <Button
                        disabled={link.url === ""}
                        href={link.url} key={index}
                        onClick={(e) => downloadFile(e, name, link.url, link.name)}
                    >
                        {link.name}
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Logo
