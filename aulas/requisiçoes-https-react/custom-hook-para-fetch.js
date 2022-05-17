// Custom hook para o fetch

// É normal dividir funções que podem ser reaproveitadas em hooks

// essa técnica é chamada de custom hook, e vamos criar um para o resgate de dados

// os hooks geralmente ficam na pasta hooks

//devemos utilizar o padrao useNomeDoHook

// basicamente criamos essa função e exportamos ela para o componente! (como se fosse um arquivo css module)

// nos arquivos passados criamos a seguinte estrutura para o get

  // forma mais usada GET

  const dados = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    dados()
  }, [])

//   pode ser feito assim tbm GET

  useEffect(() =>{
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setProducts(data)
    })
  }, [])

// oque nós vamos fazer de fato é criar uma pasta hooks e vamos customizar um hook com o conteudo dessa função, logo importa-lo para o componente App e usa-lo

//então dentro do arquivo useFetch.jsx temos a seguinte estrutura

import {useEffect, useState} from 'react'


export const useFetch = (url) => {

    const [data, setData] = useState(null)

    //criamos nossa função
    const fetchData = async() => {
        
        const res = await fetch(url)

        const json = await res.json()

        setData(json)
    }

    //vamos chamar ela agora
    useEffect(() => {

        //aqui dentro vamos só invocar a execução da função acima

        fetchData()

    }, [url]) //vamos passar como condição para executar novamente o useEffect a url (ou seja, sempre que a url mudar ele executa de novo)

    //vamos retornar data em forma de objeto para que no componente possamos usar destructuring
    return { data }
}


//agora dentro do componente App vamos importa-la e usa-la

import { useEffect, useState } from 'react'
//custom hook
import { useFetch } from './hooks/useFetch.jsx'

//css
import '../styles/App.css'

function App() {
  //states
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  //url
  const url = 'http://localhost:3000/products'


  //usando custom hook // usando destructuring para consumir o retorno da função
  const { data } = useFetch(url)



  // ADIONANDO DADOS (INFORMAÇÕES) POST


  const handleSubmit = async (e) => {
    e.preventDefault()
    //requisição post

    //vamos enviar para o banco em forma de objeto com as chaves, name e price recebendo os respectivos valores dos estates criados (name e price)
    const product = {
      name: name,
      price: price
    }

    // fazendo a requisição (ela funciona exatamente como o get, com algumas mudanças)
    //vamos passar um objeto como segundo argumento

    //esse objeto contem 3 chaves --> method (onde vamos definir qual metodo da requisição) /// headers (cabecalho, onde vamos configurar o tipo de conteudo que vamos receber, no nosso caso json) ///  body (corpo, onde vamos indicar qual objeto vamos passar para ser adicionado a requisição)

    //portando uma requisição com base em json deve ser feita assim

    const res = await fetch(url, {
      method: "POST", //metodo
      headers: { // conteudo que vamos trabalhar
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product) // transformando o objeto product em JSON
    }) // pronto dessa forma fizemos uma requisição do tipo POST

    //3 carregamento dinâmico

    const addedProduct = await res.json()

    setProducts((prevProducts) => {
      [...prevProducts, addedProduct]
    })

    setName('')
    setPrice('')

  }



  console.log(products)

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {data && data.map((values) => (
          <li key={values.id}>
            Produto:{values.name} -<span> Preço: R$ {values.price}</span>
          </li>
        ))}
      </ul>
      {/* //formulario para envio via POST */}
      <div className="add-product">
        <form
          onSubmit={handleSubmit}
        >
          <label>
            <span>
              Adicionar Produto
            </span>
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span>
              Adicionar Preço
            </span>
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar produto" />
        </form>
      </div>
    </div>
  )
}

export default App


