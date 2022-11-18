import React from 'react'
import {EObjectType} from '../../../../types/simplified-screeps'
import {Creep} from './creep'
import {ICreepsProps} from './creeps-interfaces'

export const Creeps = ({objects}: ICreepsProps) => {
  const creeps = objects.filter(({objectType}) => objectType === EObjectType.CREEP)

  return (
    <>
      {creeps.map(creep => (
        <Creep key={`creep:${creep.id}`} creep={creep} />
      ))}
    </>
  )
}
