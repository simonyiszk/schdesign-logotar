<script lang="ts">
  import Overlay from "$lib/components/icons/Overlay.svelte"

  let { children } = $props()
</script>

{@render children()}

<Overlay />
