<script lang="ts">
  import { generatorGuideStore } from "$lib/stores/GeneratorGuideStore.svelte"
  import Button from "$lib/components/ui/button/button.svelte"
  import { ArrowRight, CircleX } from "lucide-svelte"

  import * as Dialog from "$lib/components/ui/dialog/index.js"

  function handleReset() {
    generatorGuideStore.reset()
  }
</script>

{#if $generatorGuideStore.length > 0}
  <div class="overlay">
    <div class="content">
      <div>
        {$generatorGuideStore.length} lépés feljegyezve
      </div>
      <div>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="destructive" size="icon">
              <CircleX />
            </Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Biztosan törlöd az eddigi lépéseid?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Footer class="gap-1">
              <Dialog.Close>
                <Button class="w-full" type="reset">Mégsem</Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button
                  class="w-full"
                  type="submit"
                  variant="destructive"
                  onclick={handleReset}>Törlés</Button
                >
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Root>
        <a href="/generator">
          <Button variant="default" size="icon">
            <ArrowRight />
          </Button>
        </a>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .overlay {
    @apply sticky bottom-0 left-0 w-full p-4;
  }

  .content {
    @apply flex flex-row items-center justify-between rounded-lg border-2 border-muted bg-background p-4 shadow-lg;
  }
</style>
