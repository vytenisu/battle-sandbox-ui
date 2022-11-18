import qs from 'query-string'

export interface IConfigQuery {
  mock?: string // Mock data
  quick?: string // Fast animations
  clean?: string // No metrics
}

export const isMockModeEnabled = () => {
  const query = qs.parse(window.location.search) as IConfigQuery
  return Boolean(query.mock)
}

export const isQuickAnimationEnabled = () => {
  const query = qs.parse(window.location.search) as IConfigQuery
  return !query.quick
}

export const isCleanModeEnabled = () => {
  const query = qs.parse(window.location.search) as IConfigQuery
  return query.clean
}
