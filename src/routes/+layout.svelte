<script lang="ts">
  import { ModeWatcher } from "mode-watcher"
  import "../app.css"
  import Header from "$lib/components/header/Header.svelte"
  let { children } = $props()
</script>

<ModeWatcher />

<div>
  <Header />
  <main>
    {@render children?.()}
  </main>
</div>
