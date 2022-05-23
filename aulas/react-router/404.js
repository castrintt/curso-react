// No match Route (404)

// Podemos criar uma pagina 404 facilmente com o react router

// basta criarmos o componente da pagina

// e no arquivo App.js definir o path como*

// dessa maneira, qualquer rota que não exista cairá neste componente 

// ou seja caso configuremos o Route dessa forma:
// lembrando de sempre instalar o react-router-dom --> npm install react-router-dom
import { BrowserRouter, Routes, Route, <Link:im></Link:im> } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import PageNotFound from './components/PageNotFound.jsx'

const App = () => {

    return(
        <div>
            <BrowserRouter>
                <Link to='/about'>
                    About
                </Link>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

// dessa forma o quando acessarmos qualquer caminho sem ser o default , /about vamos cair no componente PageNotFound