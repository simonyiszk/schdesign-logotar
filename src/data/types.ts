interface Category {
  id: number
  name: string
  slug: string
}

interface Team {
  id: number
  name: string
  slug: string
}

interface Logo {
  id: number
  name: string
  path: string
}

export type RawCategory = Category
export type RawTeam = Team & {
  categoryId: number
}
export type RawLogo = Logo & {
  teamId: number
}

export interface ICategory extends Category {
  teams: Array<ITeam>
}

export interface ITeam extends Team {
  logos: Array<Logo>
}

export type ILogo = Logo
