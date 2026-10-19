import type { Localized } from '../i18n/locale'

/** A month as 'YYYY-MM', formatted per locale when displayed. */
export type YearMonth = `${number}-${number}`

export interface Profile {
  name: string
  role: Localized
  intro: Localized
  /** About section paragraphs. */
  bio: Localized<string[]>
  /** Short invitation shown in the Contact section. */
  contactIntro: Localized
}

export interface Education {
  id: string
  institution: string
  institutionUrl?: string
  degree: Localized
  startYear: number
  /** null while still studying. */
  endYear: number | null
  description?: Localized
}

export interface Certification {
  id: string
  /** Official certification name, usually not translated. */
  name: string
  issuer: string
  issued: YearMonth
  expires?: YearMonth
  credentialId?: string
  credentialUrl?: string
}

export interface Experience {
  id: string
  company: string
  companyUrl?: string
  role: Localized
  start: YearMonth
  /** null for the current position. */
  end: YearMonth | null
  location?: Localized
  highlights: Localized<string[]>
  tech: string[]
}

export interface Project {
  id: string
  /** Project name, usually not translated. */
  title: string
  summary: Localized
  year: number
  tech: string[]
  links: { repo?: string; live?: string }
}

export type SocialId = 'email' | 'github' | 'linkedin'

export interface SocialLink {
  id: SocialId
  /** mailto: for email, the profile URL otherwise. */
  href: string
}
