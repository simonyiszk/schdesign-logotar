export type GuideStepActionType =
  | "add-logo"
  | "add-category"
  | "add-team"
  | "edit-logo"

export type RequiredFields = {
  category: string
  team: string
  logoFilename: string
  isDark: boolean
}

export abstract class GuideStep {
  readonly action: GuideStepActionType
  readonly actionLabel: string

  constructor(action: GuideStepActionType, actionLabel: string) {
    this.action = action
    this.actionLabel = actionLabel
  }

  abstract render(): string
}

export class AddLogoStep extends GuideStep {
  action: GuideStepActionType = "add-logo"
  render(): string {
    return this.action
  }
}

export class AddCategory extends GuideStep {
  config: Pick<RequiredFields, "category">
  constructor(config: Pick<RequiredFields, "category">) {
    super("add-category", "Kategória hozzáadása")
    this.config = config
  }
  render(): string {
    return this.action
  }
}

export class AddTeam extends GuideStep {
  action: GuideStepActionType = "add-team"
  render(): string {
    return this.action
  }
}

export class EditLogo extends GuideStep {
  config: Omit<RequiredFields, "isDark">
  constructor(config: Omit<RequiredFields, "isDark">) {
    super("edit-logo", "Logó szerkesztése")
    this.config = config
  }

  private makePath() {
    return `static/icons/${this.config.category}/${this.config.team}/${this.config.logoFilename}`
  }

  render(): string {
    return `Keresd meg a(z) ${this.makePath()} fájlt a Github repository-ban és szerkeszd a fájlt. Ezután nyiss egy PR request-et és dobj egy emailt nekünk.`
  }
}
