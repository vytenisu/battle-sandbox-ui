import React, {useState} from 'react'
import {BACKGROUND_EMPTY_CELL, MAP_CELL_SIZE} from '../../../constants/ui'
import {IFeed, useFeed} from '../../../hooks'
import {isMockModeEnabled} from '../../../utils/config'
import {Creeps} from './creeps'
import {Swamps} from './swamps'
import {Walls} from './walls'

export const Map = () => {
  const mockMode = isMockModeEnabled()
  const [map, setMap] = useState<IFeed | null>(null)
  useFeed(setMap, mockMode)

  if (!map) {
    return null
  }

  const {room, terrain, objects} = map

  const width = room.width * MAP_CELL_SIZE
  const height = room.height * MAP_CELL_SIZE

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: BACKGROUND_EMPTY_CELL,
      }}
    >
      <svg width={width} height={height}>
        <Walls terrain={terrain} />
        <Swamps terrain={terrain} />
        <Creeps objects={objects} />
      </svg>
    </div>
  )
}
