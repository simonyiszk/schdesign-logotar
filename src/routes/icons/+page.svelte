<script lang="ts">
  import Icon from "$lib/components/icons/Icon.svelte"
  import Overlay from "$lib/components/icons/Overlay.svelte"
  import { Input } from "$lib/components/ui/input"
  import * as Dialog from "$lib/components/ui/dialog"
  import { Button } from "$lib/components/ui/button"
</script>

<div class="container mx-auto grid gap-4">
  <section>
    <Input type="text" placeholder="Keress a logók között" class="max-w-xs" />
  </section>

  <div class="">
    <section class="grid grid-cols-3 gap-4 lg:grid-cols-5">
      {#each { length: 20 } as _, i}
        <Icon />
      {/each}
    </section>
  </div>
</div>
