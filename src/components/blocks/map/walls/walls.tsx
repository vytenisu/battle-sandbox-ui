import React from 'react'
import {Position} from '../../../../utils/position'
import {Wall} from './wall'
import {IWallsProps} from './walls-interfaces'

export const Walls = ({terrain}: IWallsProps) => {
  const wallPositions = Object.entries(terrain)
    .filter(([, {terrain: terrainMask}]) => terrainMask === TERRAIN_MASK_WALL)
    .map(([hash]) => Position.decodeFromHash(hash))

  return (
    <>
      {wallPositions.map(({x, y}) => (
        <Wall key={`wall:${x}: ${y}`} x={x} y={y} />
      ))}
    </>
  )
}
