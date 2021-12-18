import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Skeleton,
    Typography
} from "@mui/material";
import {ILink} from "../../data/data";
import React from "react";

interface LogoProps {
    name: string
    preview: string
    links: Array<ILink>
}

function downloadFile(url: string) {
    console.log(url)

    const link = document.createElement("a")
    link.href = url
    link.click()
}

function Logo(props: LogoProps) {

    const {name, preview, links} = props

    const [src, setSrc] = React.useState("");


    const img = new Image()
    img.src = preview === "" ? "https://dummyimage.com/280x210/999/fff" : preview
    img.onload = () => {
        console.log("loaded")
        setSrc(preview === "" ? "https://dummyimage.com/280x210/999/fff" : preview)
    }

    return (
        <Card sx={{ maxWidth: 280 }}>
            { src === "" ? (
                <Skeleton animation="wave" variant="rectangular" width={280} height={210} />
            ) : (
                <CardMedia sx={{width: 280, height: 210, display: "flex", justifyContent: "center", alignItems: "center"}}>
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
                <Typography gutterBottom variant="h6" component="div" align={"center"}>
                    {name}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                {links.map((link, index) =>
                    <Button key={index} onClick={() => downloadFile(link.url)}>{link.name}</Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Logo
