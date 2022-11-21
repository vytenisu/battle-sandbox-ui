import React, {useEffect, useState} from 'react'
import {BODY_PART_MAX_HITS} from '../../../../../constants/screeps'
import {
  CREEP_ENEMY_FILL,
  CREEP_OWN_FILL,
  CREEP_STROKE,
  CREEP_TEXT_COLOR,
  MAP_CELL_SIZE,
} from '../../../../../constants/ui'
import {isQuickAnimationEnabled} from '../../../../../utils/config'
import {ICreepProps} from './creep-interfaces'
import s from './creep.module.css'

export const Creep = ({creep}: ICreepProps) => {
  const quick = isQuickAnimationEnabled()

  const radius = MAP_CELL_SIZE / 2

  const leftX = creep.pos.x * MAP_CELL_SIZE
  const topY = creep.pos.y * MAP_CELL_SIZE

  const realCx = leftX + radius
  const realCy = topY + radius

  return (
    <>
      <ellipse
        className={quick ? s.transition : s.quickTransition}
        cx={realCx}
        cy={realCy}
        rx={radius}
        ry={radius}
        fill={creep.my ? CREEP_OWN_FILL : CREEP_ENEMY_FILL}
        stroke={CREEP_STROKE}
      />
      <text
        transform={`translate(${leftX} ${topY - 12})`}
        className={quick ? s.transition : s.quickTransition}
        fill={CREEP_TEXT_COLOR}
        style={{fontSize: 12, opacity: 0.6}}
      >
        {creep.id}
      </text>
    </>
  )
}

const countBodyPart = (type: BodyPartConstant, body: BodyPartDefinition[]) =>
  body.reduce((sum, part) => sum + Number(part.type === type), 0)
