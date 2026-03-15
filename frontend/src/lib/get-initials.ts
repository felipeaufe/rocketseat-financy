export function getInitials(name: string) {
  const fallback = 'AA'
  const baseName = name

  const trimmed = baseName.trim()
  if (!trimmed) {
    return fallback
  }

  const parts = trimmed.split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last =
    parts.length > 1
      ? (parts[parts.length - 1]?.[0] ?? '')
      : (parts[0]?.[1] ?? '')
  return `${first}${last}`.toUpperCase() || fallback
}
