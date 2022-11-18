import React from 'react'
import {IMainTemplateProps} from './main-interfaces'

export const MainTemplate: React.FC<IMainTemplateProps> = ({children}) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </div>
)
