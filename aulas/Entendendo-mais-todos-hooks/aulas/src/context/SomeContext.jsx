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