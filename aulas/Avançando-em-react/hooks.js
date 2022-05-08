//Hooks

//oque são hooks??

//Basicamente hooks são funções (que são reutilizáveis )

// Hooks são recursos que tem diversar funções

// como: guardar e alterar o estado de algum dado na nossa aplicação

// todos os hooks começam com 'use', por exemplo o hook 'useState'

//podemos criar os nossos hooks, isso é chamado de custom hook

// os hooks precisam ser importados!!!

// geralmente são uteis em todas aplicações

//ex de uma aplicação boa para um hook

//nós trabalhamos muito com inputs, validação de dados, alteração , cadastro de novos dados, precisamos guardar os dados, precisamos consultar esses dados e para isso o temos uma funcionalidade incrivel --> hooks


// veremos agora o hook useState

//useState

// é um dos hooks mais utilizados

// utilizamos para gerenciar o estado de algum dado, variaveis não funcionam corretamente, o componente não re-renderiza

// para guardar o dado definimos o nome da variavel e para alterar vamos utilizar setNome, onde nome é o nome do nosso dado

//usamos a seguinte sintaxe

// 1) -caso a importação do react ja tenha sido feita (import React from 'react'), podemos usar o useState como uma extensão do React --> React.useState()

import React from 'react'

//a sintaxe do hook ficaria assim

const [nomeDaConstante, setNomeDaFunção] = React.useState()

// 2) -porem caso a importação do React não tenha ocorrido, devemos importar somente o useState, da seguinte forma

import {useState} from 'react'

// e a sintaxe mudaria

const [nomeDaConstante, setNomeDaFunção] = useState()


//dentro do JSX vamos usar essa constante para pegar a alteração do dado, dessa forma

import React from 'react'


const Componente = () => {

    let numero = 1

    const [alteraNumero, setNumero] = React.useState(15)
                                                    //aqui inicializamos o valor da alteração do como 15
    return(
            <div>
                    <h1>
                        {numero}
                    </h1>
                    <br />
                    <h1>
                        {alteraNumero}
                    </h1>
            </div>
    )
}

//por isso não vamos trabalhar com variaveis e sim com states!!

//exemplo de toogle com o useState

import React from 'react'

const Challenge = () => {

    let numero1 = 15
    let numero2 = 12

    function soma(x, y) {
        return x + y
    }

    const [valor, setValor] = React.useState(false)

    return (
        <div>
            <h1>
                Numero 1: {numero1}
            </h1>
            <br />
            <h1>
                Numero 2: {numero2}
            </h1>
            <br />
            <button
                onClick={() => {
                    setValor(!valor)
                }}
            >
                Clique aqui para somar

            </button>
            <h1 id='merda'>
                Resultado: {
                    valor == true ? soma(numero1, numero2) : '0'
                }
            </h1>
        </div>
    )
}

export default Challenge


//OBS a nomenclatura de hooks lembra muito o destructuring em javascript

// veja um exemplo de destructuring


const frutas = ['maçã','banana','melão']

const [fruta1,fruta2,fruta3] = frutas

console.log(fruta1) //maçã
console.log(fruta2) //banana
console.log(fruta3) //melão