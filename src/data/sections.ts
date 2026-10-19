/** Page sections in display order. Each id is also the section's anchor. */
export const sectionIds = ['home', 'about', 'projects', 'experience', 'contact'] as const

export type SectionId = (typeof sectionIds)[number]
