import React, {useEffect, useState} from 'react'
import {GENERATION_URL, INTERFACE_URL} from '../../constants/socket'
import {connectController} from '../../services/controller'
import {connectGenerator} from '../../services/generator'
import {isMockModeEnabled} from '../../utils/config'
import {Overview} from '../pages/overview'

export const App = () => {
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

  return <Overview />
}
