import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.jsx'
import Repetir from './components/Repetir.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Info from './pages/Info.jsx'
import Teste from "./components/Teste.jsx";



const App = () => {
  return(
    <div>
      <Repetir/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path={`/products/:id/info`} element={<Info />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App