import React, {useEffect, useState} from 'react'
import {BODY_PART_MAX_HITS, MAX_BODY_SIZE} from '../../../../../constants/screeps'
import {
  CREEP_ENEMY_FILL,
  CREEP_INFO_LINES_AMOUNT,
  CREEP_INFO_LINES_MARGIN,
  CREEP_INFO_LINES_STROKE_WIDTH,
  CREEP_INFO_LINES_WIDTH_REDUCTION,
  CREEP_INFO_LINE_ATTACK_COLOR,
  CREEP_INFO_LINE_MOVE_COLOR,
  CREEP_OWN_FILL,
  CREEP_STROKE,
  MAP_CELL_SIZE,
} from '../../../../../constants/ui'
import {isInfoEnabled, isQuickAnimationEnabled} from '../../../../../utils/config'
import {ICreepProps} from './creep-interfaces'
import s from './creep.module.css'

const ANIMATION_DURATION = 1000

export const Creep = ({creep}: ICreepProps) => {
  const [linesVisible, setLinesVisible] = useState(false)

  const quick = isQuickAnimationEnabled()
  const info = isInfoEnabled()

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (info) {
      timeout = setTimeout(() => {
        setLinesVisible(true)
      }, ANIMATION_DURATION)
    }

    return () => {
      if (info) {
        clearTimeout(timeout)
        setLinesVisible(false)
      }
    }
  }, [creep, setLinesVisible, info])

  const radius = MAP_CELL_SIZE / 2

  const leftX = creep.pos.x * MAP_CELL_SIZE
  const topY = creep.pos.y * MAP_CELL_SIZE

  const realCx = leftX + radius
  const realCy = topY + radius

  const movePartCount = countBodyPart(MOVE, creep.body)
  const attackPartCount = countBodyPart(ATTACK, creep.body)

  const movePartFraction = movePartCount / MAX_BODY_SIZE
  const attackPartFraction = attackPartCount / MAX_BODY_SIZE

  const moveBarLength = (MAP_CELL_SIZE - CREEP_INFO_LINES_WIDTH_REDUCTION) * movePartFraction
  const attackBarLength = (MAP_CELL_SIZE - CREEP_INFO_LINES_WIDTH_REDUCTION) * attackPartFraction

  const linesBaseOffset = -(
    CREEP_INFO_LINES_MARGIN +
    CREEP_INFO_LINES_AMOUNT * CREEP_INFO_LINES_STROKE_WIDTH
  )

  const maxHits = creep.body.length * BODY_PART_MAX_HITS
  const actualHits = creep.body.reduce((sum, {hits}) => sum + hits, 0)
  const hitsFraction = actualHits / maxHits

  const MAX_OPACITY = 1
  const MIN_OPACITY = 0.3
  const creepOpacity =
    Math.round((MAX_OPACITY - MIN_OPACITY) * hitsFraction * 100) / 100 + MIN_OPACITY

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
        style={{opacity: creepOpacity}}
      />
      {linesVisible ? (
        <svg style={{opacity: 0.7}}>
          <line
            x1={leftX + CREEP_INFO_LINES_WIDTH_REDUCTION / 2}
            y1={topY + linesBaseOffset}
            x2={leftX + attackBarLength}
            y2={topY + linesBaseOffset}
            stroke={CREEP_INFO_LINE_ATTACK_COLOR}
            strokeWidth={CREEP_INFO_LINES_STROKE_WIDTH}
          />
          <line
            x1={leftX + CREEP_INFO_LINES_WIDTH_REDUCTION / 2}
            y1={topY + linesBaseOffset + CREEP_INFO_LINES_STROKE_WIDTH}
            x2={leftX + moveBarLength}
            y2={topY + linesBaseOffset + CREEP_INFO_LINES_STROKE_WIDTH}
            stroke={CREEP_INFO_LINE_MOVE_COLOR}
            strokeWidth={CREEP_INFO_LINES_STROKE_WIDTH}
          />
        </svg>
      ) : null}
    </>
  )
}

const countBodyPart = (type: BodyPartConstant, body: BodyPartDefinition[]) =>
  body.reduce((sum, part) => sum + Number(part.type === type), 0)
