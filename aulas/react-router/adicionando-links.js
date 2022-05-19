// Adicionando links para as rotas

// Para criar links para as paginas vamos precisar utilizar o <Link></Link> do react router

// no link configuramos o parametro to , que recebe a Url/path que será redirecionado ao clicar no link

// antes de tudo deve ser feita a importação do link

import { Link } from 'react-router-dom'

// caso voce esteja fazendo uma navbar que contenha elementos que estão dentro de BrowserRouter voce deve incluir a navbar dentro do BrowserRouter, caso contrario será barrado com um erro

// ou seja, sempre que hover elementos de rotas dentro de um componente vc deve sempre inclui-lo dentro do BrowserRouter

//ex

<div>
          <BrowserRouter>
              <Navbar /> 
              {/* // aqui temos uma navbar que acessa todos os componentes abaixo dentro dela */}
              {/* portando devemos inclui-la logo abaixo do BrowserRouter */}
            <Routes>
              <Route path='/' element={<Home />}  />
              <Route path='about' element={<About />}  />
              <Route path='teste' element={<Teste />}  />
            </Routes>
          </BrowserRouter>
</div>

//navbar (possui links que são elementos do react-router-dom)

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
        <ul>
            <li>
                <Link to='/'>
                    Hello
                </Link>
            </li>
            <li>
                <Link to='/about'>
                    Hello
                </Link>
            </li>
            <li>
                <Link to='/teste'>
                    Hello
                </Link>
            </li>
        </ul>
        </nav>
    </>
  )
}

export default Navbar

//resumindo

// BrowserRouter é oque engloba tudo

// Em Routes vamos definir todas as Route (no caso, definimos todos os elementos/componentes que serão renderizados e qual caminho/url usaremos para acessa-los)

//Route é onde configuramos o path (caminho) e element (componente a ser renderizado)

//Link é simplismente uma ancora usada para navegar entre paginas (lembrando que deve-se colocar um componente que contem links (ou seja, um componente que usa aspectos do react-router-dom) dentro da tag que engloba tudo --> BrowserRouter) 

//estrutura

// <BrowserRouter>
//     <Link to='/'></Link>
//      {/* // ou componente que tem o Link */}
//      <Routes>
//          <Route path='/' element={<ElementoAqui />} />
//      </Routes>
// </BrowserRouter>



// no fim  a estrutura completa ficou assim



// Componente App (componente root / principal)

//importe de dependencias
import {BrowserRouter, Routes,Route } from 'react-router-dom'

//import componentes --> pages
import Home from './pages/Home.jsx' 
import About from './pages/About.jsx'

//import componentes --> estaticos (que se repetem em todas as paginas)
import Navbar from './components/Navbar.jsx'

const App = () => {
    return(
        <div>
            {/* dentro de BrowserRouter temos Link(nesse caso Link está dentro do componente NavBar), Routes, Route */}
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App


//componente Navbar

import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <div>
            <Link to='/'>
                Home
            </Link>
            <Link to='about'>
                About
            </Link>
        </div>
    )
}

export default Navbar