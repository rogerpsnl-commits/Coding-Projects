/**
 * Shared category color palette used across CategoryFilter, TaskCard, and SettingsModal.
 * Colors are stored as simple string keys (e.g. 'purple') and resolved to Tailwind classes here.
 */

export const COLOR_PALETTE = {
  purple:  { dot: 'bg-purple-400',  badge: 'bg-purple-100 text-purple-700',   ring: 'ring-purple-300' },
  blue:    { dot: 'bg-blue-400',    badge: 'bg-blue-100 text-blue-700',       ring: 'ring-blue-300' },
  emerald: { dot: 'bg-emerald-400', badge: 'bg-emerald-100 text-emerald-700', ring: 'ring-emerald-300' },
  rose:    { dot: 'bg-rose-400',    badge: 'bg-rose-100 text-rose-700',       ring: 'ring-rose-300' },
  amber:   { dot: 'bg-amber-400',   badge: 'bg-amber-100 text-amber-700',     ring: 'ring-amber-300' },
  cyan:    { dot: 'bg-cyan-400',    badge: 'bg-cyan-100 text-cyan-700',       ring: 'ring-cyan-300' },
  fuchsia: { dot: 'bg-fuchsia-400', badge: 'bg-fuchsia-100 text-fuchsia-700', ring: 'ring-fuchsia-300' },
  orange:  { dot: 'bg-orange-400',  badge: 'bg-orange-100 text-orange-700',   ring: 'ring-orange-300' },
  teal:    { dot: 'bg-teal-400',    badge: 'bg-teal-100 text-teal-700',       ring: 'ring-teal-300' },
  indigo:  { dot: 'bg-indigo-400',  badge: 'bg-indigo-100 text-indigo-700',   ring: 'ring-indigo-300' },
}

export const COLOR_NAMES = Object.keys(COLOR_PALETTE)

// Well-chosen defaults for the three built-in categories
export const DEFAULT_CATEGORY_COLORS = {
  Family:    'purple',
  Work:      'blue',
  Wellbeing: 'emerald',
}

const FALLBACK = { dot: 'bg-gray-400', badge: 'bg-gray-100 text-gray-600', ring: 'ring-gray-300' }

export function getCategoryColor(name, categoryColors = {}) {
  const colorKey = categoryColors[name] ?? DEFAULT_CATEGORY_COLORS[name]
  return COLOR_PALETTE[colorKey] ?? FALLBACK
}

// Pick the next color not yet in use (wraps around if palette is exhausted)
export function nextAutoColor(existingColors) {
  const used = new Set(Object.values(existingColors))
  for (const name of COLOR_NAMES) {
    if (!used.has(name)) return name
  }
  // All used — cycle by count
  return COLOR_NAMES[Object.keys(existingColors).length % COLOR_NAMES.length]
}
