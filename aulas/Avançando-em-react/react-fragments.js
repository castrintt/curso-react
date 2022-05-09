//React fragments

// são interessantes para quando precisamos ter mais de um elemento pai em um componente

//criamos assim os fragmentos, que são nada mais nada menos que uma tag 2 tags 1 aberta vazia e uma fechada vazia -->>  ( <> ... </> )


//ela serve como elemento pai, não alterando a estrutura do HTML com uma div por exemplo


//basicamente é isso

import React from 'react'

const Fragments = () => {
  return (
    <>
        <h1>
            Aqui temos um fragmento criado!
        </h1>
    </>
  )
}

export default Fragments

//um fragmento que simula uma div por exemplo!!


//seria interessante usar um fragment quando a div não acrescentaria nada para nosso documento como um elemento root!

//ele deixa o componente mais simples

//quando inspecionamos dentro do navegador vemos que no html não foi criado um elemento root como uma div, seria como se tivessemos deixado aquele h1 'solto' porem sabemos que não esta!

//fragments podem ter props da mesma forma que uma div

//logo um codigo assim é valido:

//componente pai

import React,{useState} from 'react'
import Fragments from './components/Fragments.jsx'

const App = () => {

    const [novaProps, setNovaProps] = useState([
        {
            id:1,
            name:'igor'
        },
        {
            id:2,
            name:'Matheus'
        },
    ])

    return(
        <>
            <Fragments passandoProps={novaProps}/>
        </>
    )
}

export default App



// componente filho


import React, {useState} from 'react'


const Fragments = ({passandoProps}) => {

    return(
        <>
            <h1>
                Olá dev : {passandoProps.name}, Seja bem-vindo!
            </h1>
        </>
    )
}

export default Fragments

//se abrirmos o inspec do navegador vamos ver que a unica coisa que mudou foi que não temos uma div englobando o titulo! ele está 'sozinho'