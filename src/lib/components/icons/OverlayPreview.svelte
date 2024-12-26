<script lang="ts">
  import { Flashlight, FlashlightOff } from "lucide-svelte"
  import Button from "../ui/button/button.svelte"
  import { mode } from "mode-watcher"
  import clsx from "clsx"

  interface Props {
    path: string
  }
  const { path }: Props = $props()

  let flashLightMode = $state(false)

  function toggleFlashlight() {
    flashLightMode = !flashLightMode
  }

  $effect(() => {
    flashLightMode = $mode === "light"
  })
</script>

<figure class={clsx(flashLightMode === ($mode === "light") ? "def" : "inv")}>
  <div class="absolute right-0 top-0 p-2">
    <Button size="icon" variant="outline" onclick={toggleFlashlight}>
      {#if flashLightMode}
        <Flashlight />
      {:else}
        <FlashlightOff />
      {/if}
    </Button>
  </div>
  <!-- svelte-ignore a11y_missing_attribute -->
  <img src={path} />
</figure>

<style lang="postcss">
  figure {
    @apply relative size-full rounded-xl border-2;
  }

  img {
    @apply size-full p-4;
  }

  .def {
    @apply bg-background;
  }

  .inv {
    @apply bg-foreground;
  }
</style>
