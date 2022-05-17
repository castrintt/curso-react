// Carregamento dinâmico de dados

// se a requisição foi feita com sucesso, podemos adicionar o item a lista após o request

// isso torna nossa aplicação mais performatica

// utilizaremos o set do useState para isso

//após feito a requisição POST com sucesso devemos adicionar ainda os dados resgatados no array de products usando o setProducts (onde temos acesso ao prev[no caso prevProducts])

// dessa forma vamos adicionar ao array usando o spread operator tanto o prevProducts (que são os produtos presentes no state antes da mudança) e a nossa requisição

// sintaxe da requisição

import React, {useState, useEffect} from 'react'


const [products, setProducts] = useState([])
const [name, setName] = useState('')
const [price, setPrice] = useState('')

const product = {
    name: name,
    price: price
}

const url = 'http://localhost:3000/products'

const res = await fetch(url, {
    method:"POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify(product)
})

// pegando de forma assincrona os dados da nossa requisição
const awaitRes = await res.json()

//aqui temos acessos aos dados anteriores que por sua primeira instancia são os dados atuais 
setProducts((prevProducts) => {
    return [...prevProducts, awaitRes] // colocamos o awaitRes como item do array porque ele vai esperar a requisição do res ser feita(onde estamos fazendo nosso POST) e vai transformar em json() ai sim podemos enviar para o sistema
})

//resetando os inputs
setName('')
setPrice('')





//dentro do componente ficaria assim:

import { useEffect, useState } from 'react'


function App() {
  //states
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const url = 'http://localhost:3000/products'

  // forma mais usada GET

  const dados = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    dados()
  }, [])

  //pode ser feito assim tbm GET

  // useEffect(() =>{
  //   fetch(url)
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((data) => {
  //     setProducts(data)
  //   })
  // }, [])


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
        {products.map((values) => (
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


