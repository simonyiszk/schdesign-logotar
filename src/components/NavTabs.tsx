import { Tab, Tabs, Theme, ThemeProvider } from "@mui/material"
import { useState } from "react"
import type { ICollection } from "../data"

interface NavTabsPros {
  theme: Theme
  reszortok: Array<ICollection>
  page: number
  onClick: (value: number) => void
}

export function NavTabs(props: NavTabsPros) {
  const { theme, reszortok, page, onClick } = props
  const [value, setValue] = useState(page)

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
