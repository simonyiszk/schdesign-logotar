<script lang="ts">
  import StepsOverlay from "$lib/components/guide/StepsOverlay.svelte"

  let { children } = $props()
</script>

<div class="container mx-auto">
  {@render children()}
</div>

<StepsOverlay />
