import type { YearMonth } from '../data/types'
import type { Locale } from './locale'

/** '2024-03' → 'Mar 2024' (en) / 'mar 2024' (es). */
export function formatYearMonth(value: YearMonth, locale: Locale) {
  const [year, month] = value.split('-').map(Number)
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(Date.UTC(year, month - 1))
}
