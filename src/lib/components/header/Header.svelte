<script>
  import ModeMenu from "./ModeMenu.svelte"
  import { page } from "$app/state"
  import LogoMini from "../schdesign/LogoMini.svelte"
  import { Cat } from "lucide-svelte"

  const links = [
    {
      label: "Ikonok",
      href: "/icons",
    },
    {
      label: "Segédlet",
      href: "/guide",
    },
  ]
</script>

<header>
  <div class="container mx-auto flex flex-row items-center justify-between p-4">
    <div class="relative flex flex-row items-center gap-2">
      <div class="size-6 fill-schdesign-primary">
        <LogoMini />
      </div>
      <h1 class="mt-2 font-schdesign text-2xl">logotar</h1>
      <Cat />
    </div>
    <div class="flex flex-row items-center gap-2">
      <nav class="flex flex-row gap-2">
        {#each links as { href, label }}
          <a class:activeLink={page.url.pathname === href} {href}>{label}</a>
        {/each}
      </nav>
      <ModeMenu />
    </div>
  </div>
</header>

<style lang="postcss">
  .activeLink {
    @apply text-primary;
  }
</style>
