
//criando contexto

import { useState, createContext } from 'react'

export const CounterContext = createContext()

//criando um acesso para o contexto (provider)

export const CounterContextProvider = ({children}) => {

    const [data, setData] = useState(5)

    return(
        <CounterContext.Provider value={{data, setData}}>
            {children}
        </CounterContext.Provider>
    )
}