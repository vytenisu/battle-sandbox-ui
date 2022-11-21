import React from 'react'
import {SUMMARY_TEXT_COLOR, SUMMARY_TEXT_OPACITY} from '../../../constants/ui'
import {IInfoProps} from './info-interfaces'

const COLUMN_WIDTH = 80

export const Info = ({objects}: IInfoProps) => {
  const headingStyle: React.CSSProperties = {width: COLUMN_WIDTH, textAlign: 'left'}

  return (
    <table style={{color: SUMMARY_TEXT_COLOR, opacity: SUMMARY_TEXT_OPACITY}}>
      <tr>
        <th style={headingStyle}>Id</th>
        <th style={headingStyle}>Hits</th>
        <th style={headingStyle}>Attack</th>
        <th style={headingStyle}>Move</th>
        <th style={headingStyle}>Fatigue</th>
        <th style={headingStyle}>TTL</th>
      </tr>
      {objects.map(object => (
        <tr>
          <td>{object.id}</td>
          <td>
            {object.hits}/{object.hitsMax}
          </td>
          <td>
            {object.body.reduce((sum, {type, hits}) => sum + (hits && type === ATTACK ? 1 : 0), 0)}/
            {object.body.reduce((sum, {type}) => sum + (type === ATTACK ? 1 : 0), 0)}
          </td>
          <td>
            {object.body.reduce((sum, {type, hits}) => sum + (hits && type === MOVE ? 1 : 0), 0)}/
            {object.body.reduce((sum, {type}) => sum + (type === MOVE ? 1 : 0), 0)}
          </td>
          <td>{object.fatigue}</td>
          <td>
            {object.ticksToLive}/{CREEP_LIFE_TIME}
          </td>
        </tr>
      ))}
    </table>
  )
}
