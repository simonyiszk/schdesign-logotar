<script lang="ts">
  import { ModeWatcher } from "mode-watcher"
  import "../app.css"
  import Header from "$lib/components/header/Header.svelte"
  import { logoOverlayStore } from "$lib/stores/LogoOverlay"
  let { children } = $props()

  function closeOverlayKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      logoOverlayStore.close()
    }
  }
</script>

<svelte:window onkeydown={closeOverlayKey} />

<ModeWatcher />

<div class="flex min-h-svh flex-col gap-8">
  <Header />
  <main>
    {@render children()}
  </main>
</div>
