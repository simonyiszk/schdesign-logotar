<script>
  import Button from "$lib/components/ui/button/button.svelte"

  const name = "schdesign_mini_black.svg"
</script>

<div class="overlay">
  <div class="grid-bg">
    <!-- svelte-ignore a11y_missing_attribute -->
    <img class="size-64" src="/favicon.png" />
  </div>
  <div>
    <div>
      <h2>{name}</h2>
    </div>
    <div>
      <Button>SVG</Button>
    </div>
  </div>
</div>

<style lang="postcss">
  .overlay {
    @apply sticky bottom-0 left-0 flex w-full flex-row bg-background p-4 shadow-2xl;
    box-shadow:
      18px 56px rgba(0, 0, 0, 0.16),
      0 4px 12px rgba(0, 0, 0, 0.16);
  }

  .grid-bg {
    @apply rounded-xl border-2;
    background-size: 10px 10px;
    background-image: linear-gradient(
        to right,
        rgb(216, 216, 216) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgb(216, 216, 216) 1px, transparent 1px);
  }
</style>
