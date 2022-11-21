import React from 'react'
import {SUMMARY_TEXT_COLOR, SUMMARY_TEXT_OPACITY} from '../../../constants/ui'
import {IMainTemplateProps} from './main-interfaces'

export const MainTemplate: React.FC<IMainTemplateProps> = ({children, side}) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div>{children}</div>
    <div style={{paddingLeft: 20}}>{side}</div>
  </div>
)
