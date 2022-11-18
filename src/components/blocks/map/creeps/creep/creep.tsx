import React from 'react'
import {
  CREEP_ENEMY_FILL,
  CREEP_OWN_FILL,
  CREEP_STROKE,
  MAP_CELL_SIZE,
} from '../../../../../constants/ui'
import {ICreepProps} from './creep-interfaces'

export const Creep = ({creep}: ICreepProps) => {
  const radius = MAP_CELL_SIZE / 2

  const realCx = creep.pos.x * MAP_CELL_SIZE + radius
  const realCy = creep.pos.y * MAP_CELL_SIZE + radius

  return (
    <ellipse
      cx={realCx}
      cy={realCy}
      rx={radius}
      ry={radius}
      fill={creep.my ? CREEP_OWN_FILL : CREEP_ENEMY_FILL}
      stroke={CREEP_STROKE}
    />
  )
}
