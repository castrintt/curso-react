import React, {useState, useEffect} from 'react'

//import pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Teste from './pages/Teste.jsx'
import Product from './pages/Product.jsx' 

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
              {/* rota dinamica */}
              <Route path='products/:id' element={<Product />}  />
            </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App