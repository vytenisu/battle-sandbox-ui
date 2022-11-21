import React from 'react'
import {ECommand, ICommandAttack} from '../../../../types/commands'
import {IPosition} from '../../../../types/common'
import {Attack} from './attack'
import {IAttacksProps} from './attacks-interfaces'

export const Attacks = ({objects, commands}: IAttacksProps) => {
  const attackCommands = commands.filter(
    command => command.type === ECommand.ATTACK,
  ) as ICommandAttack[]

  const positionPairs: {start: IPosition; end: IPosition}[] = []

  for (const attackCommand of attackCommands) {
    const start = objects.find(({id}) => id === attackCommand.payload.sourceId)?.pos
    const end = objects.find(({id}) => id === attackCommand.payload.targetId)?.pos

    if (start && end) {
      positionPairs.push({start, end})
    }
  }

  return (
    <>
      {positionPairs.map(({start, end}) => (
        <Attack
          key={`a${start.x}:${start.y}-${end.x}:${end.y}`}
          startPosition={start}
          endPosition={end}
        />
      ))}
    </>
  )
}
