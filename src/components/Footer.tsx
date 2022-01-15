import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Box, Container, Grid, IconButton, IconButtonProps, SvgIcon, Typography} from "@mui/material";
import {SvgIconProps} from "@mui/material/SvgIcon/SvgIcon";
import {ReactComponentElement, ReactElement} from "react";

function SchdesignIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props} viewBox="-350 -350 4967 4967">
            <path d="M0,2137.42c0,-293.452 56.033,-569.615 168.099,-828.486c112.065,-258.872 264.155,-485.566 456.267,-680.4c192.113,-194.834 418.966,-348.204 680.4,-460.27c261.593,-112.066 539.036,-168.099 832.489,-168.099c293.612,0 569.774,56.033 828.486,168.099c258.872,112.066 484.284,264.155 676.397,456.268l-568.334,568.333c-122.632,-122.792 -264.155,-218.848 -424.249,-288.169c-160.094,-69.32 -330.754,-104.061 -512.3,-104.061c-304.179,0 -570.896,88.052 -800.47,264.155c-229.415,176.104 -389.509,400.235 -480.282,672.395l3369.98,-0c10.726,64.037 20.012,129.356 28.016,196.115c8.005,66.759 12.007,134.799 12.007,204.12c0,293.452 -56.032,569.614 -168.098,828.486c-112.066,258.872 -264.155,484.284 -456.268,676.397c-192.113,192.113 -417.525,344.202 -676.397,456.268c-258.712,112.066 -534.874,168.099 -828.486,168.099c-298.736,-0 -577.62,-56.033 -836.491,-168.099c-258.712,-112.066 -484.285,-264.155 -676.398,-456.268l568.334,-568.333c122.792,122.792 264.155,218.848 424.249,288.169c160.094,69.32 333.636,104.061 520.306,104.061c298.895,-0 563.05,-86.771 792.465,-260.153c229.574,-173.382 386.947,-396.232 472.277,-668.392l-3361.97,-0c-10.566,-64.038 -20.011,-129.356 -28.016,-196.115c-8.005,-66.76 -12.007,-134.799 -12.007,-204.12Z"/>
        </SvgIcon>
    )
}

interface CustomIconButtonProps {
    href: string
    icon: ReactElement<any, any>
}

function CustomIconButton(props: CustomIconButtonProps) {
    return (
        <IconButton color={"primary"} size={"large"} href={props.href}>
            {props.icon}
        </IconButton>
    )
}

function Footer() {
    return (
        <Box>
            <Container maxWidth={"xl"}>
                <CustomIconButton href={"https://schdesign.hu"} icon={<SchdesignIcon />} />
                <CustomIconButton href={"https://www.youtube.com/channel/UCrpoUHr-I8VjjLgXUz-AV6Q/"} icon={<YouTubeIcon />} />
                <CustomIconButton href={"https://www.facebook.com/schdesignbme"} icon={<FacebookIcon />} />
                <CustomIconButton href={"https://www.instagram.com/schdesign.hu/"} icon={<InstagramIcon />} />
                <CustomIconButton href={"https://github.com/simonyiszk/schdesign-logotar"} icon={<GitHubIcon />} />
            </Container>
        </Box>
    )
}

export default Footer
