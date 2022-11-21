import React, {useEffect, useState} from 'react'
import {GENERATION_URL, INTERFACE_URL} from '../../../constants/socket'
import {connect} from '../../../services/generator'
import {isMockModeEnabled} from '../../../utils/config'
import {Map} from '../../blocks/map'
import {MainTemplate} from '../../layouts/main'

export const Overview = () => {
  const [socketReady, setSocketReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (isMockModeEnabled()) {
        await connect(GENERATION_URL)
      } else {
        await connect(INTERFACE_URL)
      }
      setSocketReady(true)
    })()
  }, [])

  if (!socketReady) {
    return null
  }

  return (
    <MainTemplate>
      <Map />
    </MainTemplate>
  )
}
