import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SomeContextProvider } from './context/SomeContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SomeContextProvider>
      <App />
    </SomeContextProvider>
  </React.StrictMode>
)
