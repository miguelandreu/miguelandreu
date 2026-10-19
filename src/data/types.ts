import type { Localized } from '../i18n/locale'

export interface Profile {
  name: string
  role: Localized
  intro: Localized
}
