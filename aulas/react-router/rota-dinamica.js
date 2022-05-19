// Rota Dinâmica

// Para criar uma rota dinâmica vamos precisar definir uma nova Route em App.js

// que deve ter o padrao de --> products/:id

// onde :id é o dado dinamico, ou seja, podemos ter qualquer valor

// na pagina podemos utilizar o hook useParams para resgatar essa informação 

// usado para carregar a mesma pagina com dados diferentes
//ex um site de vendas que acessa o mesmo layout de produtos com dados diferentes


// para usar um dado dinamico dentro da tag <Link to={dado dinamico aqui} ></Link>

// devemos passar com uma sintaxe especial

//suponha que temos o seguinte componente 
//componente App

import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Produtos from './pages/Produtos.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="produtos/:id" element={<Produtos />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App




//componente Navbar


import {useState} from 'react'

const Navbar = () => {

    const [data, setData] = useState([
        {
            id:1,
            name:'produto1'
        },
        {
            id:2,
            name:'produto2'
        },
        {
            id:3,
            name:'produto3'
        },
    ])

    return(
        <>
            <ul>
                {data.map((values) => (
                    <li key={values.id}>
                        <h1>
                        {values.name}
                        </h1>
                        <Link to={`products/${values.id}`}>
                            Acessar produto
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Home

// dessa forma quando clicamos no link, somos direcionados para uma url products/idDoItem


//Agora vamos usar o useParams para trazer o id que o usuario acessa dentro de Home para a pagina que ele realmente acessa o produto (onde ele ve os detalhes do produto)

// useParams pega os dados que setamos como :id dentro de um link

// note que no exemplo acima onde configuramos o <Route path="produtos/:id" element={<Produto/>} /> indicamos para o Route no parametro path que existe um :id dinamico, poderia ser literalmente qualquer coisa, suponha que o dado seja o nome de uma fruta, poderia escrever como path="produto/:fruta", esse nome que colocamos depois dos dois pontos ':' é acessado pelo useParams que nos retorna um objeto

//por tanto devemos desestruturar ele da seguinte forma

//primeiro claramente vamos importar o useParams

import {useParams} from 'react'

const Produtos = () => {
    //como o useParams nos retorna um objeto, podemos desestrutura-lo da seguinte forma

    //porque usamos id? --> porque no componente App, setamos no Route que o caminho usado seria produtos/:id --> por isso temos que desestruturar recebendo o mesmo parâmetro!
    const { id } = useParams()

    return(
        <>
        {/* exibindo o id recebido pelo dado desestruturado do useParams ele deve ser identico ao dado que esta na url
        portanto se acessarmos http://localhost:3001/produtos/1   --> o id mostrado na tela dentro do paragrafo deve ser 1 tbm! */}
            <p>
                ID do produto é: {id}
            </p>
        </>
    )
}

export default Produtos

