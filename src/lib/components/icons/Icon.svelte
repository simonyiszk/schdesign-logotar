<script lang="ts">
  import LogoMini from "../schdesign/LogoMini.svelte"
  import * as Tooltip from "$lib/components/ui/tooltip"

  interface Props {
    name: string
    path: string
  }

  const { path, name }: Props = $props()
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <div
        class="aspect-square size-full rounded-xl bg-muted p-4 transition hover:bg-muted-foreground/20"
      >
        <!-- svelte-ignore a11y_missing_attribute -->
        <img class="size-full object-contain" src={path} />
      </div>
    </Tooltip.Trigger>
    <Tooltip.Content side="bottom">
      <p>{name}</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
