// Configurando React Router

// para configurar o React Router vamos ter que umportar tres elementos de react-router-dom (lembrando que para instalar é simples: npm install react-router-dom)

// BrowserRouter --> define onde a área do nosso app que vai trocar as paginas (temos que ter um local onde troca as paginas, normalmente entre o rodapé e a barra de navegação)

// Routes --> define as rotas (dentro de Routes vamos ter varios Route)

// Route --> um elemento deste para cada rota, configura com path e componente da rota


//IMPORTAÇÃO

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//depois do import vamos usar  o BrowserRouter , Routes e Route para definir rotas
// a estrutura completa 'por hora' ficaria assim

import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'


const App = () => {
    // BrouserRouter é uma tag de abertura e fechamento, dentro dele, teremos o Routes

    //dentro de Routes vamos designar todas as rotas

    return(
        <div>
            <h1>
                React Router
            </h1>
            <BrowserRouter>
                <Routes>
                    {/* dentro de Routes configuramos uma unica rota default (/) que ira renderizar o componente Home */}
                <Route path="/" element={<Home />}/>
                </Routes>
            </BrowserRouter>
        {/* todo que estiver fora do <BrowserRouter></BrowserRouter> são os componentes que se repetem em todas as paginas (geralmente cabecalho e rodapé) */}
        </div>
    )
}

export default App 

//logo a estrutura do <Route /> é -->

// 1 --> path="caminho aqui" onde será definido o caminho onde o usuario acessara na url // element={<Elemento aqui />} que definira qual elemento sera renderizado no path (logo ambos estao associados)

//suponha que agora queiramos adicionar mais uma rota chamada 'about' que renderiza o componente About

// fariamos assim

import React, {useState, useEffect} from 'react'
import Home from './components/Home.jsx'
import About from './components/About.jsx'


const App = () => {

    return(
        <div>
            <h1>
                Componente react - router - dom
            </h1>
            <BrowserRouter>
                <Routes>
                    {/* renderizando no caminho default / --> home */}
                    <Route path="/" element={Home} />
                    {/* renderizando no caminho about /about/ --> about */}
                    <Route path="about" element={About}  />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

// ou seja quando o usuario acessar http://localhost:3001/ (caminho default) o componente que sera renderizado é o Home

// e quando o usuario acessar http://localhost:3001/about (caminho about) o componente que sera renderizado é o About