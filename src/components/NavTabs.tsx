import { Tab, Tabs, Theme, ThemeProvider } from "@mui/material"
import React from "react"
import { ICollection } from "../data/data"

interface NavTabsPros {
  theme: Theme
  reszortok: Array<ICollection>
  page: number
  onClick: (value: number) => void
}

function NavTabs(props: NavTabsPros) {
  const { theme, reszortok, page, onClick } = props
  const [value, setValue] = React.useState(page)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      <Tabs value={value} onChange={handleChange} variant="scrollable">
        {reszortok.map((reszort, index) => (
          <Tab
            label={reszort.name}
            key={index}
            onClick={() => onClick(index)}
          />
        ))}
      </Tabs>
    </ThemeProvider>
  )
}

export default NavTabs
