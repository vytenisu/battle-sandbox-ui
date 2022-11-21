import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './components/app'
import './constants/global'
import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
