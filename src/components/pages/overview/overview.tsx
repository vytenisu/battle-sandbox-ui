import React, {useState} from 'react'
import {IFeed, useFeed} from '../../../hooks'
import {isMockModeEnabled} from '../../../utils/config'
import {Info} from '../../blocks/info'
import {Map} from '../../blocks/map'
import {MainTemplate} from '../../layouts/main'

export const Overview = () => {
  const mockMode = isMockModeEnabled()
  const [map, setMap] = useState<IFeed | null>(null)
  useFeed(setMap, mockMode)

  if (!map) {
    return null
  }

  return (
    <MainTemplate side={<Info objects={map.objects} />}>
      <Map map={map} />
    </MainTemplate>
  )
}
