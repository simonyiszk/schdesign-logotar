<script lang="ts">
  import StepsOverlay from "$lib/components/guide/StepsOverlay.svelte"
  import * as Card from "$lib/components/ui/card/index.js"

  const links: Array<{ label: string; href: string }> = [
    {
      label: "Új logó hozzáadása",
      href: "/generator/new-logo",
    },
    {
      label: "Meglévő logó szerkesztése",
      href: "/generator/edit-logo",
    },
    {
      label: "Új kategória hozzáadása",
      href: "/generator/new-category",
    },
    {
      label: "Új kör/reszort/kutyafüle hozzáadása",
      href: "/generator/new-team",
    },
  ]

  let { children } = $props()
</script>

<Card.Root>
  <Card.Content>
    <nav class="">
      <ul class="font-medium underline">
        {#each links as { href, label }}
          <li>
            <a {href}>{label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </Card.Content>
</Card.Root>

<div class="py-4">
  {@render children()}
</div>
