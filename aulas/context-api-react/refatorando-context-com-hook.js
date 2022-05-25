// Refatorando context com hook

//lembrando que para criar um context, criamos primeiro uma pasta context e criamos um arquivo com base --> NomeQualquerContext.jsx

//depois importamos useState e o createContext
import {useState, createContext} from 'react'

//criamos um contexto usando o nome do arquivo como base / exportamos ele 

export const NomeQualquerContext = createContext()

//create context é a forma de alterar o contexto, agora vamos criar a forma de acessar ele --> provider

export const NomeQualquerContextProvider = ({children}) => {

    const [data, setData] = useState() //qualquer valor aqui

    return(
        <NomeQualquerContext.Provider value={{data, setData}}>
            {children}
        </NomeQualquerContext.Provider>
    )
}

//depois vamos englobar o App dentro do arquivo main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

 
import NomeQualquerContextProvider from './context/NomeQualquerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <NomeQualquerContextProvider>
                <App />
            </NomeQualquerContextProvider>
  </React.StrictMode>
)

//agora podemos usar o context em componentes


// para consumir dentro de um componente é bem simples, basta desestruturar o data que esta sendo passado dentro do arquivo NomeQualquerContext.jsx usando o useContext

import {useContext} from 'react'
import NomeQualquerContext from './context/NomeQualquerContext.jsx'

const ComponenteQualquer = () => {
    const {data} = useContext(NomeQualquerContext)

    return(
        <div>
            <h1>
                {data}
            </h1>
        </div>
    )
}
export default ComponenteQualquer

// pronto recaptulado!



// agora vamos de fato refatorar

//podemos criar um hook para utilizar o contexto, isso nos dá algumas vantagens

// não precisamos importar o useContext em todos os lugares que vamos usar o contexto, só o hook

// temos um espaço para fazer uma validação do contexto

//criamos um arquivo dentro da pasta hooks (para custom hooks)

//useCounterContext
//primeiro importamos o arquivo do context


import {useContext } from 'react'
import { NomeQualquerContext } from '../context/NomeQualquerContext'


export const useNomeQualquerContext = () => {
    const context = useContext(NomeQualquerContext)

    if(!context){ // se não existe mais contexto
        console.log('Contexto não encontrado')
    }else{
        return context
    }
}

// e acessamos dentro de qualquer componente

import useNomeQualquerContext from './hooks/useNomeQualquerContext.jsx'

const Home = () => {

    const {context} = useNomeQualquerContext()

    return(
        <div>
            <h1>
                Contexto :{context}
            </h1>
        </div>
    )
}
export default Home