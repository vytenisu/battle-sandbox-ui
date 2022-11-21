import React from 'react'
import {MAP_CELL_SIZE, WEAPON_FIRE_COLOR} from '../../../../../constants/ui'
import {IAttackProps} from './attack-interfaces'

export const Attack = ({startPosition, endPosition}: IAttackProps) => {
  const radius = MAP_CELL_SIZE / 2

  return (
    <line
      x1={startPosition.x * MAP_CELL_SIZE + radius}
      y1={startPosition.y * MAP_CELL_SIZE + radius}
      x2={endPosition.x * MAP_CELL_SIZE + radius}
      y2={endPosition.y * MAP_CELL_SIZE + radius}
      stroke={WEAPON_FIRE_COLOR}
    />
  )
}
