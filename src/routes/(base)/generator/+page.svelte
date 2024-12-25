<script lang="ts">
  import { generatorGuideStore } from "$lib/stores/GeneratorGuideStore.svelte"

  import * as Card from "$lib/components/ui/card/index.js"

  let categoryValue = $state("")

  $inspect(categoryValue)
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>Lépések</Card.Title>
    <Card.Description
      >Annak a tervnek a lépéseit látod itt, amit az oldalon összeraktál
      tervként. A lépések nem feltétlen a műveletek megfelelő sorrendjében
      vannak megjelenítve!</Card.Description
    >
  </Card.Header>
  <Card.Content>
    <div>
      {#each $generatorGuideStore as step}
        <div
          class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
        >
          <span
            class="flex size-2 translate-y-1 rounded-full bg-schdesign-primary"
          ></span>
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none">
              {step.actionLabel}
            </p>
            <p class="text-sm text-muted-foreground">
              {step.render()}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </Card.Content>
</Card.Root>
