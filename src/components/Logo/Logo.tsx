import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    FormControl, IconButton,
    InputLabel, MenuItem,
    Select, SelectChangeEvent,
    Typography
} from "@mui/material";
import {ILink} from "../../data/data";
import {useState} from "react";
import DownloadIcon from '@mui/icons-material/Download';

interface LogoProps {
    name: string
    preview: string
    links: Array<ILink>
}


function Logo(props: LogoProps) {

    let {name, preview, links} = props

    const [format, setFormat] = useState(links[0].name);


    preview = "https://dummyimage.com/280x210/999/fff"

    const handleChange = (event: SelectChangeEvent) => {
        setFormat(event.target.value as string);
    };

    return (
        <Card sx={{ maxWidth: 280 }}>
            <CardMedia
                component="img"
                height="210"
                image={preview}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" align={"center"}>
                    {name}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                {links.map((link, index) =>
                    <Button key={index} value={link.name}>{link.name}</Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Logo
