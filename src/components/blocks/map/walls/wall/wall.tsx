import React from 'react'
import {BACKGROUND_WALL, MAP_CELL_SIZE} from '../../../../../constants/ui'
import {IWallProps} from './wall-interfaces'

export const Wall = ({x, y}: IWallProps) => {
  const realX = x * MAP_CELL_SIZE
  const realY = y * MAP_CELL_SIZE

  return (
    <rect
      x={realX}
      y={realY}
      width={MAP_CELL_SIZE}
      height={MAP_CELL_SIZE}
      fill={BACKGROUND_WALL}
    ></rect>
  )
}
