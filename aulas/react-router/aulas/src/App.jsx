import { useState } from 'react'
// config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//components
import Home from './components/Home.jsx'
import About from './components/About.jsx'

function App() {

  return (
    <div className="App"> 
     <h1>
       React Router -- esse titulo vai se repetir em todas as rotas
     </h1>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
