import qs from 'query-string'
import {ParsedUrlQuery} from 'querystring'

export interface IConfigQuery {
  mock?: string
}

export const isMockModeEnabled = () => {
  const query = qs.parse(window.location.search) as IConfigQuery
  return Boolean(query.mock)
}
