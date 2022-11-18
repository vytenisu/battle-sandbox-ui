import React from 'react'
import ReactDOM from 'react-dom/client'
import {Overview} from './components/pages/overview'
import './constants/global'
import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Overview />
  </React.StrictMode>,
)
