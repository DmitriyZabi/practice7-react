import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ModalState } from './components/modal/ModalContext'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ModalState>
    <App />
  </ModalState>
)
reportWebVitals()
