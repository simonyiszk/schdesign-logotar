<script lang="ts">
  import Icon from "$lib/components/icons/Icon.svelte"
  import { Input } from "$lib/components/ui/input"
  import exportedFile from "../../data/export.json"

  let searchField = $state("")

  const collection = $derived(exportedFile)

  $inspect(searchField)
  $inspect(collection)
</script>

<div class="container mx-auto grid gap-4">
  <section>
    <Input
      bind:value={searchField}
      type="text"
      placeholder="Keress a logók között"
      class="max-w-xs"
    />
  </section>

  <div class="">
    <section class="grid gap-16">
      {#each collection.sort( (a, b) => a.name.localeCompare(b.name) ) as category}
        <div>
          <h2 class="mb-2 text-2xl font-bold">{category.name}</h2>
          <div class="grid grid-cols-3 gap-4 lg:grid-cols-5">
            {#each category.teams.sort( (a, b) => a.name.localeCompare(b.name) ) as team}
              {#each team.logos as logo}
                <Icon
                  name={`${category.slug}/${team.slug}/${logo.filename}`}
                  path={logo.path}
                />
              {/each}
            {/each}
          </div>
        </div>
      {/each}
    </section>
  </div>
</div>
