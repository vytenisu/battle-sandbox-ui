import React, {useEffect, useState} from 'react'
import {GENERATION_URL, INTERFACE_URL} from '../../../constants/socket'
import {connectController} from '../../../services/controller'
import {connectGenerator} from '../../../services/generator'
import {isMockModeEnabled} from '../../../utils/config'
import {Map} from '../../blocks/map'
import {MainTemplate} from '../../layouts/main'

export const Overview = () => {
  const [socketReady, setSocketReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (isMockModeEnabled()) {
        await connectGenerator(GENERATION_URL)
      } else {
        await connectController(INTERFACE_URL)
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
