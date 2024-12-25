import { type GuideStep } from "$lib/guide/step"
import { writable } from "svelte/store"

export class GeneratorGuideStore {
  static readonly key = Symbol.for("GeneratorGuideStore")
  private stepsStore = writable<Array<GuideStep>>([])

  add(step: GuideStep) {
    return this.stepsStore.update((items) => {
      items.push(step)
      return items
    })
  }

  renderGuide(reset?: boolean) {
    if (reset) {
      this.reset()
    }
  }

  reset() {
    this.stepsStore.set([])
  }

  subscribe(run: any) {
    return this.stepsStore.subscribe(run)
  }
}

export const generatorGuideStore = new GeneratorGuideStore()
