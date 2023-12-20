import './styles/modern-normalize.css'
import './styles/index.css'
import './styles/App.css'
import './styles/components/Navbar.css'
import './styles/components/hero.css'
import './styles/utils.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>,
)
