// Criando o provider

// o provider vai delimitar onde o contexto é utilizado

// vamos criar uma especie de componente com a prop children

// e este provider deve encapsular os demais componentes em que precisamos consultar ou alterar o valor

// geralmente ele fica em App.jsx ou em index.jsx

//agora poderemos compartilhar o valor do contexto em todos os componentes

//              LEMBRANDO

//uso do children

//componente App

import Home from './components/Home.jsx'

const App = () => {
     return(
         <div>
             <Home>
                 <h1>
                     Temos aqui um titulo
                 </h1>
             </Home>
         </div>
     )
}

export default Home

//componente Home

const Home = ({ children }) => {
    return(
        <div>
            {children}
            <p>
                Aqui temos um paragrafo abaixo do Titulo!
            </p>
        </div>
    )
}

export default Home

// Context -> altera dados

// Provider -> provê dados

// para criar um provider usamos como padrao a mesma sintaxe do context + Provider
//ex

//export default ContactContext = createContext() --> context

//export const ContactContextProvider = ({children}) => {
    //contexto aqui
//}


//ex de contexto

// criamos uma pasta chamanda context, e dentro dela um arquivo chamado CountContext.jsx 

//CountContext.jsx

import {useState, createContext} from 'react'
import CounterContext from './aulas/src/context/CounterContext.jsx'

export const CounterContext = createContext() // criando a forma de alterar o contexto

export const CounterContextProvider = ({children}) => { // consumindo o contexto

    const [data, setData] = useState(5) // iniciando o state como 5 para podermos consumir ele em algum lugar

    return(
        <CounterContext.Provider value={{data, setData}} >
            {children}
        </CounterContext.Provider>
    )
}

//agora basta usar o CounterContextProvider

// vamos importa-lo dentro do arquivo main e encapsular o <App />

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//import Context

import {CounterCountextProvider} from './context/CounterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
        <App />
    </CounterContextProvider>
  </React.StrictMode>
)

// dessa forma nosso contexto pode ser usado

//para usar o contexto em algum componente temos que importar tanto o arquivo do contexto, nesse caso CounterContext, e tbm o useContext que é um hook responsavel pelo uso do context

//componente Home

import {useContext} from 'react'
import {CounterContext} from './context/CounterContext.jsx'

const Home = () => {
    //vamos usar o useContext para desestruturar o CounterContext
    const {data} = useContext(CounterContext)

    return(
        <div>
            <h1>
                Home
            </h1>
            <p>
                Consumindo aqui o context: {data}
            </p>
        </div>
    )
}

export default Home

//pronto consumimos um dado de um context usando provider, createContext, useContext e useState