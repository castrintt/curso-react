// Search Params

// Search Params é um recurso que permite obter o que vem na URL em forma de parametro, Ex: produtos?q=camisa

//Utilizamos o hook useSearchParams para obtê-los

// com este recurso fica simples fazer uma funcionalidade de busca no sistema

// o import de useSearchParams é feito do react-router-dom, logo:

import { useSearchParams } from 'react-router-dom'

//temos o hook useNavigate --> que redireciona o usuario dentro do codigo do componente

import { useSearchParams, useNavigate } from 'react-router-dom'

//exemplo

// primeiro vamos criar a estrutura do App (root) para poder usar em outro componente os search params




// PASSO 1


//componente App

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Search from './components/Search.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                {/* aqui vamos usar o componente Search, pois iremos usar atributos do react-router-dom dentro dele, e como ja vimos, quando usamos algum artificio/elemento de react-router-dom, devemos usar seus componentes dentro do BrowserRouter */}
                <Search />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App


//agora veremos o componente Search --> onde vamos usar o useNavigate primeiro para setar nossa URL de pesquisa (basicamente , por um formulario de pesquisa iremos redirecionar um usuario para uma pagina usando useNavigate)

//componente Search

import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom' // por enquanto não vamos usar o useSearchParams, somente o useNavigate (que redireciona o usuario dentro do codigo do componente)

const Search = () => {

    //declarando uma variavel para usar o useNavigate
    const navigate = useNavigate()

    //declarando uma variavel para resgatar o valor de um input
    const [query, setQuery] = useState() //iniciando sem valor nenhum

    //função de submit
    const handleSubmit = (e) => {
        e.preventDefault()
        //vamos passar para o navigate(variavel onde executamos o useNavigate)o padrao de URL de pesquisa
        navigate(`search?q=${query}`) // setamos a pesquisa como query (valor resgatado do input)
    }

    return (
        <>
            {/* vamos rodar uma função de onSubmit dentro do formulario para evitar o envio dele com preventDefault */}
            <form
                onSubmit={handleSubmit} // chamando a função de submit
            >
                <label>
                    <span>
                        Digite sua pesquisa
                    </span>
                    {/* vamos usar uma função de onChange dentro do input, para resgatar o valor digitado no input e salvar dentro de uma variavel (usando useState) */}
                    <input type="search" name="pesquisa"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </label>
                <input type="submit" value="Pesquisar" />
            </form>
        </>
    )
}

export default Search



// PASSO 2

// ja configuramos o componente de busca, agora vamos configurar a pagina de busca, para isso vamos importa-la dentro de app e usar ela dentro do Route

// componente app


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Search from './components/Search.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import SearchPage from './components/SearchPage.jsx'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                {/* aqui vamos usar o componente Search, pois iremos usar atributos do react-router-dom dentro dele, e como ja vimos, quando usamos algum artificio/elemento de react-router-dom, devemos usar seus componentes dentro do BrowserRouter */}
                <Search />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/search' element={<SearchPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

// componente SearchPage

import { useSearchParams, Link } from 'react-router-dom'
//hook customizado
import { useFetch } from './hooks/useFetch.jsx'

const SearchPage = () => {

    //resgatando os dados informados em useNavigate
    const [searchParams] = useSearchParams()

    //definindo a nova url de busca
    const url = `http://localhost:3000/products?${searchParams}`

    //recebendo dados da API
    const { data, loading, error } = useFetch(url)

    return (
        <div>
            <h1>
                resultados disponiveis
            </h1>
            <ul>
                {data && data.map((values) => (
                    <li key={values.id}>
                        <h1>
                            {values.name} -- {values.price}
                        </h1>
                        <Link to={`/products/${values.id}`}>
                            Ver detalhes
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchPage

//dessa forma quando pesquisamos algo no input de pesquisa que foi definido dentro de Search (onde usamos o hook useNavigate para definir o padrao de busca) SEMPRE COM ESSE PADRAO --> /search?q= , fomos direcionados para uma pagina, onde de fato usariamos os dados resgatados desse input para mostrar para o usuario oque ele pesquisou!