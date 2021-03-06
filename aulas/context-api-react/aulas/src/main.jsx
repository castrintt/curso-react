import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//import provider
import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      {/* <TitleColorContextProvider> */}
        <App />
      {/* </TitleColorContextProvider> */}
    </CounterContextProvider>
  </React.StrictMode>
)

//agora podemos usar o context em componentes
