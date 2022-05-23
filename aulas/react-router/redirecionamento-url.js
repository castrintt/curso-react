// Redirect (redirecionamento de url)

// podemos precisar de um redirecionamento de paginas eventualmente

//exemplo: uma pagina antiga do sistema responde agora a uma nova URL

// para isso vamos criar a rota com Route normalmente

// mas em element vamos utilizar o componente Navigate com o to que vai para a rota correta

// para usar o Navigate, vamos importa-lo junto ao BrowserRouter, Routes, Route da seguinte forma:

import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'

// agora em Route, onde passamos o path e o element, vamos chamar o Navigate e passar o parametro to que redireciona para outra pagina


// é bem simples de se usar


//ex

//temos uma rota antiga chamada company, e queremos redirecionar para rota about
//componente app

//imports (componente home/default, about, browserrouter, routes,route navigate)
import {BrowserRouter, Routes,Router, Navigate} from 'react-router-dom'

import Home from './components/Home.jsx'
import About from './components/About.jsx'

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/company' element={<Navigate to='/about' />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App

// e pronto está feito o redirecionamento, basta adicionar em element a tag Navigate com o parametro to='' para a rota que deseja que seja redirecionada!