<script lang="ts">
  import * as Tooltip from "$lib/components/ui/tooltip"

  interface Props {
    name: string
    path: string
  }

  import { logoOverlayStore } from "$lib/stores/LogoOverlay"

  const { path, name }: Props = $props()
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <button onclick={() => logoOverlayStore.open(name)} class="size-full">
        <div
          class="aspect-square size-full rounded-xl bg-muted p-4 transition hover:bg-muted-foreground/20"
        >
          <!-- svelte-ignore a11y_missing_attribute -->
          <img class="size-full object-contain" src={path} loading="lazy" />
        </div>
      </button>
    </Tooltip.Trigger>
    <Tooltip.Content side="bottom">
      <p>{name}</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
