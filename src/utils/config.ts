import qs from 'query-string'

export interface IConfigQuery {
  mock?: string
  quick?: string
}

export const isMockModeEnabled = () => {
  const query = qs.parse(window.location.search) as IConfigQuery
  return Boolean(query.mock)
}

export const isQuickAnimationEnabled = () => {
  const query = qs.parse(window.location.search) as IConfigQuery
  return !query.quick
}
