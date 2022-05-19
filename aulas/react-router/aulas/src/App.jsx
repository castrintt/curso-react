import React, {useState, useEffect} from 'react'

//import pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Teste from './pages/Teste.jsx'

//components
import Repetir from './components/Repetir.jsx'
import Navbar from './components/Navbar.jsx'

// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return(
    <div>
        <Repetir />
          <BrowserRouter>
              <Navbar />
            <Routes>
              <Route path='/' element={<Home />}  />
              <Route path='about' element={<About />}  />
              <Route path='teste' element={<Teste />}  />
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App