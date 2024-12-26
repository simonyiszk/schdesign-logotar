<script>
  import Button from "$lib/components/ui/button/button.svelte"
  import { logoOverlayStore } from "$lib/stores/LogoOverlay"
  import { slide } from "svelte/transition"
  import { X } from "lucide-svelte"
  import { logoCollection } from "$lib/data/proxy"
  import OverlayPreview from "./OverlayPreview.svelte"

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
          </div>
        </div>
        <div>
          <div>
            <Button>SVG</Button>
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
    @apply aspect-square size-full max-w-64;
  }

  .right {
    @apply flex w-full flex-col justify-between;
  }
</style>
