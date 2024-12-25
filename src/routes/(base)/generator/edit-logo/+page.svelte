<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte"
  import { generatorGuideStore } from "$lib/stores/GeneratorGuideStore.svelte"
  import * as Select from "$lib/components/ui/select/index.js"
  import { rawCategories, rawTeams } from "../../../../data/registry"
  import { EditLogo } from "$lib/guide/step"

  const categories = rawCategories

  let categoryValue = $state("")
  const selectedCategory = $derived(
    categories.find((f) => f.slug === categoryValue)?.name ??
      "Válassz egy kategóriát"
  )

  let teamValue = $state("")
  const teams = $derived.by(() => {
    if (!categoryValue) {
      return rawTeams
    }
    return rawTeams.filter(
      (e) =>
        categories.find((c) => c.slug === categoryValue)?.id === e.categoryId
    )
  })
  const selectedTeam = $derived(
    rawTeams.find((f) => f.slug === teamValue)?.name ?? "Válassz egy kört"
  )

  function handleAdd() {
    const item = new EditLogo({
      category: categoryValue,
      team: teamValue,
      logoFilename: "asd",
    })
    const index = generatorGuideStore.add(item)
    console.log(index)
  }
</script>

<Select.Root type="single" bind:value={categoryValue}>
  <Select.Trigger>
    {selectedCategory}
  </Select.Trigger>
  <Select.Content>
    {#each categories as { name, slug }}
      <Select.Item value={slug}>{name}</Select.Item>
    {/each}
  </Select.Content>
</Select.Root>

<Select.Root type="single" bind:value={teamValue}>
  <Select.Trigger>
    {selectedTeam}
  </Select.Trigger>
  <Select.Content>
    {#each teams as { name, slug }}
      <Select.Item value={slug}>{name}</Select.Item>
    {/each}
  </Select.Content>
</Select.Root>

<Button onclick={handleAdd}>Hozzáadás a listához</Button>
