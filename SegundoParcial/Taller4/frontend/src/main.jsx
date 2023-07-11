import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Concepto from './Concepto'
import Inversion from './Inversion'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Concepto />
    <Inversion />
  </React.StrictMode>
)
