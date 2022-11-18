import React from 'react'
import {Position} from '../../../../utils/position'
import {ISwampsProps} from './swamps-interfaces'
import {Swamp} from './swamp'

export const Swamps = ({terrain}: ISwampsProps) => {
  const swampPositions = Object.entries(terrain)
    .filter(([, {terrain: terrainMask}]) => terrainMask === TERRAIN_MASK_SWAMP)
    .map(([hash]) => Position.decodeFromHash(hash))

  return (
    <>
      {swampPositions.map(({x, y}) => (
        <Swamp key={`swamp:${x}: ${y}`} x={x} y={y} />
      ))}
    </>
  )
}
