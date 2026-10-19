import { useEffect, useState } from 'react'
import type { SectionId } from '../data/sections'

/**
 * The section currently crossing a thin band just above the middle of the
 * viewport, or null before any section reaches it.
 */
export function useActiveSection(ids: readonly SectionId[]) {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [ids])

  return active
}
