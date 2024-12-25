import type { RawCategory, RawLogo, RawTeam } from "./types"

const rawCategories: Array<RawCategory> = [
  {
    id: 1,
    name: "BME",
    slug: "bme",
  },
  {
    id: 2,
    name: "Bulis",
    slug: "bulis",
  },
  {
    id: 3,
    name: "Kofer",
    slug: "kofer",
  },
  {
    id: 4,
    name: "KSZK",
    slug: "kszk",
  },
  {
    id: 5,
    name: "Kultúr",
    slug: "kultur",
  },
  {
    id: 6,
    name: "Szor",
    slug: "szor",
  },
  {
    id: 7,
    name: "Schönherz",
    slug: "schonherz",
  },
  {
    id: 8,
    name: "Simonyi",
    slug: "simonyi",
  },
  {
    id: 9,
    name: "Sport",
    slug: "sport",
  },
]

const rawTeams: Array<RawTeam> = [
  {
    id: 1,
    name: "BME",
    slug: "bme",
    categoryId: 1,
  },
  {
    id: 2,
    name: "EMK",
    slug: "emk",
    categoryId: 1,
  },
  {
    id: 3,
    name: "EPK",
    slug: "epk",
    categoryId: 1,
  },
  {
    id: 4,
    name: "GPK",
    slug: "gpk",
    categoryId: 1,
  },
  {
    id: 5,
    name: "GTK",
    slug: "gtk",
    categoryId: 1,
  },
  {
    id: 6,
    name: "KJK",
    slug: "kjk",
    categoryId: 1,
  },
  {
    id: 7,
    name: "TTK",
    slug: "ttk",
    categoryId: 1,
  },
  {
    id: 8,
    name: "VBK",
    slug: "vbk",
    categoryId: 1,
  },
  {
    id: 9,
    name: "VIK",
    slug: "vik",
    categoryId: 1,
  },
]

const rawLogo: Array<RawLogo> = []

export { rawCategories, rawLogo, rawTeams }
