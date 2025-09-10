# schdesign-logotar

The collection of logos from Schönherz and its related organizations.

Check out live at: [logotar.schdesign.hu](https://logotar.schdesign.hu)

## Before starting

- PNPM: https://pnpm.io/
- Vercel CLI: https://vercel.com/docs/cli
- Node Version Manager
  - nvm: https://github.com/nvm-sh/nvm
  - fnm: https://github.com/Schniz/fnm

## Set up project

Install dependencies:

```bash
pnpm i
```

Link your local repository to the Vercel one,

```bash
vercel link
```

Pull the environment variables from Vercel.

```bash
vercel pull
```

Create a symbolic link to `.vercel/.env.development.local` to act as `.env`.

```bash
# Linux
ln -s .vercel/.env.development.local .env
# Windows PowerShell
New-Item -ItemType SymbolicLink -Value .vercel/.env.development.local -Path .env
```

## Start project

```bash
pnpm dev
```

- Frontend: [localhost:3000](http://localhost:3000)
- Payload: [localhost:3000/admin](http://localhost:3000/admin)

## Using PayloadCMS

In order to make life easier working with Payload, there's a wrapper script `payload` inside `package.json`.

Generate Payload types:

```bash
pnpm run payload generate:types
```

## Data structure

In order to efficiently store and organize the logos, these entities were created:

```typescript
type Collection = {
  name: string
  slug: string
  children: Array<Collection | Logo>
}

type Logo = {
  name: string
  slug: string
  sourceFile: Media
  files: Array<Media>
}
```
