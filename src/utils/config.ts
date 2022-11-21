import qs from 'query-string'

export interface IConfigQuery {
  mock?: string // Mock data
  quick?: string // Fast animations
  info?: string // Show metrics
}

export const isMockModeEnabled = () => {
  const query = qs.parse(window.location.search) as IConfigQuery
  return Boolean(query.mock)
}

export const isQuickAnimationEnabled = () => {
  const query = qs.parse(window.location.search) as IConfigQuery
  return !query.quick
}
