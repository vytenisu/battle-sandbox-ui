import React from 'react'
import {BACKGROUND_SWAMP, MAP_CELL_SIZE} from '../../../../../constants/ui'
import {ISwampProps} from './swamp-interfaces'

export const Swamp = ({x, y}: ISwampProps) => {
  const realX = x * MAP_CELL_SIZE
  const realY = y * MAP_CELL_SIZE

  return (
    <rect
      x={realX}
      y={realY}
      width={MAP_CELL_SIZE}
      height={MAP_CELL_SIZE}
      fill={BACKGROUND_SWAMP}
    ></rect>
  )
}
