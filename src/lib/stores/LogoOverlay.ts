import { writable } from "svelte/store"

function createLogoOverlayStore() {
  const { set, subscribe } = writable<string | null>(null)

  return {
    subscribe,
    open: (logo: string) => set(logo),
    close: () => set(null),
  }
}

export const logoOverlayStore = createLogoOverlayStore()
