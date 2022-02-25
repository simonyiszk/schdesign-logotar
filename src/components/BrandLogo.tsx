import { IconButton, SvgIcon, SvgIconProps, useTheme } from "@mui/material"

interface BrandLogoProps {
  mr: number
  themeChangeHandler: () => void
}

function SchdesignIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M-0,12.023C-0,10.371 0.315,8.818 0.946,7.362C1.576,5.906 2.432,4.63 3.512,3.535C4.593,2.439 5.869,1.576 7.34,0.946C8.811,0.315 10.371,-0 12.023,-0C13.674,-0 15.227,0.315 16.683,0.946C18.139,1.576 19.407,2.432 20.488,3.512L17.291,6.709C16.6,6.019 15.805,5.478 14.904,5.088C14.004,4.698 13.043,4.503 12.023,4.503C10.311,4.503 8.811,4.998 7.52,5.989C6.229,6.979 5.328,8.24 4.818,9.771L23.775,9.771C23.835,10.131 23.887,10.499 23.932,10.874C23.977,11.25 24,11.632 24,12.023C24,13.674 23.685,15.227 23.054,16.683C22.424,18.139 21.568,19.407 20.488,20.488C19.407,21.568 18.139,22.424 16.683,23.054C15.227,23.685 13.674,24 12.023,24C10.341,24 8.773,23.685 7.317,23.054C5.861,22.424 4.593,21.568 3.512,20.488L6.709,17.291C7.4,17.981 8.195,18.522 9.096,18.912C9.996,19.302 10.972,19.497 12.023,19.497C13.704,19.497 15.189,19.009 16.48,18.034C17.771,17.058 18.657,15.805 19.137,14.274L0.225,14.274C0.165,13.914 0.113,13.546 0.068,13.171C0.023,12.795 -0,12.413 -0,12.023Z" />
    </SvgIcon>
  )
}

function BrandLogo(props: BrandLogoProps) {
  const theme = useTheme()

  const { mr, themeChangeHandler } = props

  return (
    <IconButton
      size="large"
      sx={{ mr: mr }}
      onClick={() => themeChangeHandler()}
    >
      <SchdesignIcon
        sx={{
          color:
            theme.palette.mode === "dark"
              ? theme.palette.secondary.main
              : theme.palette.common.white,
        }}
      />
    </IconButton>
  )
}

export default BrandLogo
