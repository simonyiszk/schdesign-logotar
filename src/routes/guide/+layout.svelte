<script lang="ts">
  let { children } = $props()
</script>

<div class="container mx-auto">
  <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    Segédlet
  </h1>

  {@render children?.()}
</div>
