<script lang="ts">
  import LogoMini from "../schdesign/LogoMini.svelte"
  import * as Tooltip from "$lib/components/ui/tooltip"
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <div
        class="aspect-square size-full rounded-xl bg-muted p-4 transition hover:bg-muted-foreground/20"
      >
        <LogoMini />
      </div>
    </Tooltip.Trigger>
    <Tooltip.Content side="bottom">
      <p>asdasdasd</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
