import { useEffect, useState } from 'react'
//custom hook
import { useFetch } from './hooks/useFetch.jsx'

//css
import '../styles/App.css'

function App() {
  //states
  const [products, setProducts] = useState([])
  //usando custom hook
  //estamos recebendo o retorno do useFetch como objeto {data} porem mudando o nome dele para items usando atribuição ':'

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const url = 'http://localhost:3000/products'

  const { data, httpConfig } = useFetch(url)

  // // forma mais usada GET

  // const dados = async () => {
  //   const res = await fetch(url)
  //   const data = await res.json()
  //   setProducts(data)
  // }

  // useEffect(() => {
  //   dados()
  // }, [])

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

    // const res = await fetch(url, {
    //   method: "POST", //metodo
    //   headers: { // conteudo que vamos trabalhar
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product) // transformando o objeto product em JSON
    // }) // pronto dessa forma fizemos uma requisição do tipo POST

    // //3 carregamento dinâmico

    // const addedProduct = await res.json()

    // setProducts((prevProducts) => {
    //   [...prevProducts, addedProduct]
     
    // })

    // Refatorada
    httpConfig(product,"POST")

    setName('')
    setPrice('')

  }


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


