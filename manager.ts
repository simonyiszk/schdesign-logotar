import fs from "fs"
import path from "path"
import { ArgumentParser } from "argparse"
import * as toml from "toml"

interface Logo {
  filename: string
  path: string
  size?: number
}

interface Team {
  name: string
  slug: string
  logos: Logo[]
}

interface Category {
  name: string
  slug: string
  teams: Team[]
}

function readTomlFile(filePath: string): any {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Config file missing for ${filePath}`)
  }
  const content = fs.readFileSync(filePath, "utf-8")
  return toml.parse(content)
}

function main(args: { svgPath: string }) {
  const collection: Category[] = []

  const svgFolder = path.resolve(args.svgPath)
  const categories = fs
    .readdirSync(svgFolder, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => path.join(svgFolder, dirent.name))

  for (const cat of categories) {
    const tempTeams: Team[] = []
    const teams = fs
      .readdirSync(cat, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => path.join(cat, dirent.name))

    const categoryConfigPath = path.join(cat, "META.toml")
    const categoryConfig = readTomlFile(categoryConfigPath)

    for (const t of teams) {
      const tempLogos: Logo[] = []
      const svgFiles = fs.readdirSync(t).filter((file) => file.endsWith(".svg"))
      const teamConfigPath = path.join(t, "META.toml")
      const teamConfig = readTomlFile(teamConfigPath)

      for (const f of svgFiles) {
        const relativePath = path.relative(args.svgPath, path.join(t, f))
        const file = Bun.file(path.join(args.svgPath, relativePath))
        tempLogos.push({
          filename: f,
          path: `icons/${relativePath}`,
          size: file.size,
        })
      }

      tempTeams.push({
        name: teamConfig["name"],
        slug: teamConfig["slug"],
        logos: tempLogos,
      })
    }

    collection.push({
      name: categoryConfig["name"],
      slug: categoryConfig["slug"],
      teams: tempTeams,
    })
  }

  console.log(JSON.stringify(collection, null, 2))
}

const parser = new ArgumentParser({
  description: "SVG Manager",
})
parser.add_argument("--svg-path", { required: true })
const args = parser.parse_args()

main({ svgPath: args.svg_path })
