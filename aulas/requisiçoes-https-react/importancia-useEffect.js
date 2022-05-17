// A importancia do useEffect

// o useEffect faz com que determinada ação seja executada apenas uma vez

// isso é interessante pois os componentes estão sempre se re-renderizando, então precisamos ter ações unicas as vezes

//o useEffect ainda possui um array de dependencias, que deve conter os dados que ativem a execução da função de forma automatica

// useEffect esta sempre presente nas requisições assincronas




// RESGATANDO DADOS DE UMA API COM REACT (usando useEffect)

//para trazer os dados vamos ter que utilizar varios recursos

// primeiramente ter um local para salva-los (useState)

// renderizar a chamada da API apenas uma vez (useEffect)

// um meio de fazer a requisição assincrona (fetch)

//ex pense que temos que consumir uma API dentro do nosso projeto

//componente pai (e unico componente nesse caso)

import { useEffect, useState } from 'react'


function App() {

  const [products, setProducts] = useState([])
  //resgatando dados (vamos usar o useEffect para fazer uma requisição assincrona)


  return (
    <div className="App">
      <h1>Lista de produtos</h1>
    </div>
  )
}

export default App


// dentro ainda da area para logica do componente vamos usar o useEffect para fazer uma requisição de uma API que se encontra nesse dominio http://localhost:3000/products

// para isso vamos salvar a string desse link em uma constante!

const url = 'http://localhost:3000/products'

//pronto!

// agora vamos escrever a sintaxe base do useEffect para consumo de api

useEffect(() => {
    const res = fetch(url) // lembrando que url é uma constate com a string do local onde estamos resgatando os dados 
    //logo apos chamar o fetch vamos declarar oq o programa tem que fazer usando o metodo then (traduzindo --> quando a resposta chegar faça)
    .then((response) => { // tem como parametro a resposta resgatada pelo fetch
        // podemos tanto declarar dessa forma mais simples (que queremos receber a resposta como json() no caso)
        setProducts(response.json())

        //ou declarando uma constante com o valor da resposta ja transcrito em json e depois assimilando ao setProducts (que nesse caso é a função responsavel por alterar o state da constante products)
        const data = response.json()
        setProducts(data)

        // LEMBRANDO QUE AMBAS AS FORMAS DE DECLARAR O SETPRODUCTS SÃO VALIDAS!!!
    })
})

//logo o codigo todo ficaria assim

import React, {useState, useEffect} from 'react'


const App = () => {

    const url = 'http://localhost:3000/products'

    const [products, setProducts] = useState([]) //iniciando o estado como um array vazio, para que depois possamos iterar sobre ele e resgatar seus dados

    //use effect simples
    useEffect(() => {
        const result = fetch(url)
        .then((response) => response.json())
        .then((data) => { //depois de pegar a resposta 
            setProducts(data)
        })
    }, [])

    // o use effect pode ser usado tbm para iniciar uma requisição assincrona uma unica vez assim

    const data = async () => {
        const res = await fetch(url)
        const response = await res.json()
        setProducts(response)
    }
    // usando o useEffect so para iniciar a função assincrona
    useEffect(() => {
        data()
    })
    //AMBOS OS MODOS ESTAO CORRETOS

    //pronto, agora basta usar o console.log(products) para ver se estamos de fato recebendo uma resposta da api
    console.log(products) 

    return(
        <div>
            <h1>
                Lista de produtos
            </h1>
        </div>
    )
}

export default App


// useEffect por si só é assincrono ! logo não precisamos usar palavras reservadas como async(para declarar a função) e o await para esperar a resposta



// Primeiro passo era receber as informações da API, agora nos vamos consumir o conteudo dela dentro do nosso jsx


import React, {useState, useEffect} from 'react'

const App = () => {

    //url
    const url = 'http://localhost:3000/products'
    //state inicial
    const [products, setProducts] = useState([])
    //função para requisição assincrona
    const handleProducts = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setProducts(data)
    }
    //useEffect chamando a função (para que seja executada uma vez só)
    useEffect(() => {
        handleProducts()
    },[])


    return(
        <div>
            <h1>Tabela de preços</h1>
            {/* consumindo os dados de products */}
            <ul>
                {products.map((values)=> (
                    <li key={values.id}>
                        {values.name} -- {values.price}
                    </li>
                ))}
            </ul>

        </div>
    )
}


export default App

//LEMBRANDO QUE A API QUE ESTAMOS CONSUMINDO CONTEM OS SEGUINTES DADOS

{
    "products": [
      {
        "id": 1,
        "name": "Camisa",
        "price": 59.9
      },
      {
        "id": 2,
        "name": "Calça vermelha",
        "price": 90
      },
      {
        "id": 3,
        "name": "Boné aba reta",
        "price": 29.9
      }
    ]
  }