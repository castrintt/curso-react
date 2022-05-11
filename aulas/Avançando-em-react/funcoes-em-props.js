//Funções em props

//as funções podem ser passadas para as props normalmente

//basta criar a função no componente pai e enviar como props para o componente filho

//no componente filho ela pode ser ativado por um evento por exemplo

//podemos por exemplo passar a seguinte função no componente pai p/ componente filho

//componente pai

import React, {useState} from 'react'


const App = () => {

    //aqui criaremos a função

    function mensagem(){
        console.log('Mensagem do componente pai!')
    }


    return(
        <div>
            <ComponenteFilho message={mensagem} />
        </div>
    )
}

export default App

//e agora no componente filho iremos acessar essa função como se fosse uma props normal!

import React, {useState} from 'react'

const ComponenteFilho = ({message}) => {

    return(
    <>
        <button
            onClick={message}
        >
            Clique aqui para mostrar no console a mensagem!
        </button>
    </>
    )
}

export default ComponenteFilho

// logo quando clicarmos no botao do componente filho vai mostrar uma mensagem no console 

// ou seja usamos uma função que esta originalmente no componente pai, passamos ela para o componente filho via props, e logo depois a invocamos dentro do botao usando o envento onClick={}