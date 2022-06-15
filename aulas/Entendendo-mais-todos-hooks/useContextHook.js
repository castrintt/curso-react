// useContext

// o useContext é o hook utilizado para consumir um contexto, da context API

// vamos precisar criar o contexto e tambem o provider

// um cria o contexto, outro possibilita o acesso

// envolver os componentes que receberão os valores compartilhados

// e então fazer o uso do hook onde necessario

//context


import { createContext } from "react";

export const SomeContext = createContext()

export const SomeContextProvider = ({children}) => {

    const texto = 'Olá contexto'

    return(
        <SomeContext.Provider value={{texto}} >
            {children}
        </SomeContext.Provider>
    )
}

//main

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


//onde vamos consumir
import { useContext } from 'react'

import {SomeContext} from './context/SomeContext'


function App() {

  const {texto} = useContext(SomeContext)

  return (
    <div className="App">
        <h1>{texto}</h1>
    </div>
  )
}

export default App
