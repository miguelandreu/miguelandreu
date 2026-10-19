/** Page sections in display order. Each id is also the section's anchor. */
export const sectionIds = ['home', 'about', 'experience', 'projects', 'contact'] as const

export type SectionId = (typeof sectionIds)[number]
