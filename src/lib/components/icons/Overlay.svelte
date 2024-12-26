<script>
  import Button from "$lib/components/ui/button/button.svelte"
  import { logoOverlayStore } from "$lib/stores/LogoOverlay"
  import { slide } from "svelte/transition"
  import { X } from "lucide-svelte"
  import { logoCollection } from "$lib/data/proxy"
  import OverlayPreview from "./OverlayPreview.svelte"
  import { GIT_BRANCH } from "$lib/config"

  function handleClose() {
    logoOverlayStore.close()
  }

  const entry = $derived.by(() => {
    if (!$logoOverlayStore) {
      return null
    }

    for (let c of logoCollection) {
      for (let t of c.teams) {
        for (let l of t.logos) {
          if (l.path.includes($logoOverlayStore)) {
            return {
              category: c,
              logo: l,
              team: t,
            }
          }
        }
      }
    }
  })

  const name = $derived.by(() => {
    if (!$logoOverlayStore) {
      return null
    }
    const [category, team, svg] = $logoOverlayStore.split("/")

    return {
      category,
      team,
      svg,
    }
  })
</script>

{#if $logoOverlayStore && entry}
  <div transition:slide={{ axis: "y" }} class="overlay">
    <div class="content">
      <div class="left">
        <OverlayPreview path={entry?.logo.path} />
      </div>
      <div class="right">
        <div>
          <div class="flex w-full flex-row items-center justify-between">
            <h1 class="text-ellipsis text-xl font-semibold sm:text-2xl">
              {name?.svg}
            </h1>
            <Button size="icon" onclick={handleClose}>
              <X />
            </Button>
          </div>
          <div>
            <h2>{entry?.team.name}</h2>
            <h3>{Math.round(entry?.logo.size / 1000)} kB</h3>
            <h3>
              Utoljára módosítva: {new Date(
                entry?.logo.lastModified
              ).toLocaleDateString("hu")}
            </h3>
          </div>
        </div>
        <div>
          <div>
            <a
              href={`icons/${entry.category.slug}/${entry.team.slug}/${entry.logo.filename}`}
              target="_blank"
            >
              <Button>SVG letöltése</Button>
            </a>
            <a
              href={`https://github.com/simonyiszk/schdesign-logotar/tree/${GIT_BRANCH}/static/icons/${entry.category.slug}/${entry.team.slug}/`}
              target="_blank"
            >
              <Button>Github</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .overlay {
    @apply sticky bottom-0 left-0 z-50 mx-auto w-full max-w-screen-md p-4;
  }

  .content {
    @apply flex w-full flex-col gap-4 rounded-xl border-2 bg-background p-4 shadow-xl sm:flex-row;
  }

  .left {
    @apply aspect-square size-full sm:max-w-64;
  }

  .right {
    @apply flex w-full flex-col justify-between;
  }
</style>
