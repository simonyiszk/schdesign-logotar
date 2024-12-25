<script>
  import ModeMenu from "./ModeMenu.svelte"
  import LogoMini from "../schdesign/LogoMini.svelte"
  import { Cat, CircleHelp, Image, Plus } from "lucide-svelte"
  import { Button } from "$lib/components/ui/button"
</script>

<header>
  <div class="container mx-auto flex flex-row items-center justify-between p-4">
    <div class="relative flex flex-row items-center gap-2">
      <div class="size-6 fill-schdesign-primary">
        <LogoMini />
      </div>
      <h1 class="mt-2 font-schdesign text-2xl">logotar</h1>
      <Cat class="stroke-schdesign-primary" />
    </div>
    <div class="flex flex-row items-center gap-1">
      <nav class="flex flex-row gap-1">
        <a href="/icons">
          <Button variant="outline" size="icon">
            <Image />
          </Button>
        </a>
        <a href="/generator">
          <Button variant="outline" size="icon">
            <Plus />
          </Button>
        </a>

        <a href="/guide">
          <Button variant="outline" size="icon">
            <CircleHelp />
          </Button>
        </a>
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
