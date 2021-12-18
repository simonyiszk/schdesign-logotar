import {ILogo} from "../data/data";
import {Box, Grid, Zoom} from "@mui/material";
import Logo from "../components/Logo/Logo";

interface LogoLibraryProps {
    logos: Array<ILogo>
}

function LogoLibrary(props: LogoLibraryProps) {
    const {logos} = props

    return (
        <Box sx={{ padding: 4}}>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                    {logos.map((logo, index) =>
                        <Zoom key={index} in={true}
                               timeout={500}
                               style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <Grid item>
                                <Logo name={logo.name} preview={logo.preview} links={logo.links} />
                            </Grid>
                        </Zoom>
                    )}
                </Grid>
        </Box>
    )
}

export default LogoLibrary;
