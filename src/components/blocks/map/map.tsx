import React, {useState} from 'react'
import {BACKGROUND_EMPTY_CELL, MAP_CELL_SIZE} from '../../../constants/ui'
import {IFeed, useFeed} from '../../../hooks'
import {isMockModeEnabled} from '../../../utils/config'
import {Attacks} from './attacks'
import {Creeps} from './creeps'
import {IMapProps} from './map-interfaces'
import {Swamps} from './swamps'
import {Walls} from './walls'

export const Map = ({map}: IMapProps) => {
  const {room, terrain, objects, commands = []} = map

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
        <Attacks objects={objects} commands={commands} />
      </svg>
    </div>
  )
}
