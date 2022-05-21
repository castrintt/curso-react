//Nested Route

// As nested Routes indicam URLs mais complexas, como /products/:d/something

// neste caso vamos preicsar criar um componente que corresponda com o padrão indicado e tambem a URL em App.jsx

// na nested route teremos o acesso ao parametro da URL tambem

// temos uma rota para informar todos os produtos, com preços , uma rota para mostrar um produto individualmente de forma dinamica, agora queremos criar uma rota que acessa mais informações do produto que foi acessado individualmente

//vamos criar esse componente

//para ficar mais facil de entender vou separar em seções

// 1 ) componente App (root)

// vamos ter as importações de componentes e pages + BrowserRouter, Routes, Route

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.jsx'


import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Info from './pages/Info.jsx'

// vamos ter o componente em si

const App = () => {
    return(
      <div>
          {/* browserrouter englobando todas as rotas e suas configurações */}
        <BrowserRouter> 
        {/* navbar sendo um componente que recebe propriedades de rotas, porem se repete em todos os componentes(por tanto ele fica fora de Routes, mas dentro de BrowserRouter) */}
          <Navbar />
          {/* Routes responsavel por englobar todas as Route (que contem a configuração dos caminhos acessados na URL) */}
          <Routes>
              {/* path / --> default --> rota inicial renderiza o componente Home */}
            <Route path="/" element={<Home />} />
            {/* path about renderiza o componente About */}
            <Route path="/About" element={<About />} />
            {/* rota /products/:id --> renderiza o componente Product, e tem como sintaxe o id ---> que é uma forma dinamica de trocar informações entre componentes (acessado pelo useParams) */}
            <Route path="/products/:id" element={<Product />} />
            {/* nested route, é uma rota dinamica onde usamos o :id para resgatar informações usando o useParams tambem, porem temos uma rota a frente de :id */}
            <Route path={`/products/:id/info`} element={<Info />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
  export default App


  //componente home --> onde estamos criando acessos diretos para cada rota, usando Link do react-router-dom

  //importamos o useFetch para fazer o resgate dos dados via GET, e importamos o Link para redirecionarmos os usuarios para outras rotas dentro do navegador

import { useFetch } from "../hooks/useFetch";
import {Link} from 'react-router-dom'


const Home = () => {

    //acessando a url
  const url = 'http://localhost:3000/products'

  //desestruturando o useFetch
  const { data, loading, error} = useFetch(url)

  return(
    <div>
      <h1>
        Home
      </h1>
      <ul>
          {/* criando uma condicional onde quando data receber dados ou seja se data for diferente de null  */}
        {data && data.map((values) => (
          <li key={values.id}>
            <h1>
              {values.name} -- {values.price}
            </h1>
            {/* passando um link para acessar somente um produto de forma individual e dinamica */}
            <Link to={`/products/${values.id}`}>
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home


//componente product usado para renderizar de forma individual os elementos

import React, { useEffect, useState } from 'react'

import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Product = () => {

    //use params, usado para indicar na URL qual dado vamos receber
    //foi indicado dentro do App que receberiamos no caminho (path) /products/:id 
    //agora estamos desestruturando para receber esse id
    const { id } = useParams()

    const url = `http://localhost:3000/products/${id}`


    //sem useFetch

    // const [data, setData] = useState([])

    // const handleRequest = async () => {

    //     const res = await fetch(url)

    //     const json = await res.json()

    //     setData(json)
    // }

    // useEffect(() => {
    //     handleRequest()
    // },[])

    //com useFetch

    const { data, loading, error } = useFetch(url)
    //mostrando de forma dinamica os dados

    return (
        <>
        {/* voltar para pagina principal */}
            <Link to='/'>
                Back to Home
            </Link>

            {error && <p>Ocorreu algum erro...</p>}
            {loading == true ? <p>Carregando dados...</p> : (
                <div>
                    <h1>
                        ID do produto : {id}
                    </h1>
                    <h1>
                        Produto : {data && data.name} -- Preço : {data && data.price}
                    </h1>
                    {/* nested routes */}
                    <Link to={`/products/${id}/info`}>
                        Mais informações
                    </Link>
                </div>
            )}

        </>
    )
}

export default Product



//agora vamos configurar a rota dinamica products/:id, no componente App está configurado o seguinte Route 

{/* <Route path={`/products/:id/info`} element={<Info />} */}

//dessa forma dentro de products conseguimos ver mais informações detalhadas do produto, vamos usar o conceito de rotas mais complexas para acessar essas informações

//vamos importar o useParams de novo e usar o destructuring de objeto para receber o id dinamico que foi configurado no Route

import {useParams} from 'react-router-dom'
import {useFetch} from './hooks/useFetch.jsx'

const Info = () => {

  const { id } = useParams()

  //recebemos o dado para usar o useFetch de forma dinamica passando o ID (para que possamos acessar somente 1 produto por vez)
  const url = `http://localhost:3000/products/${id}`

  const { data, loading, error } = useFetch(url)

  return(

    <>
      {error && <p>Algum erro aconteceu</p>}
      {loading === true ? <p>Carregando informações</p> : 
        <div>
        <h1>
          Mais informações do produto
        </h1>

        <h1>
        Produto: -- {data && data.name}
        </h1>
        <h1>
        Preço: -- {data && data.price}
        </h1>
        <h1>
        informações extras: -- {data && data.info}
        </h1>
    </div>
      }
    </>
  )
}

export default Info 

// pronto rota dinamica configurada e roda dinamica complexa configuradas!
