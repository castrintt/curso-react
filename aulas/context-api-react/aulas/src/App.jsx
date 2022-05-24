import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Navbar from './components/Navbar'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ChangeCounter from './components/ChangeCounter'

//context

function App() {

  return (
    <div
    className="App"
    style={
      {
        maxWidth:"100vw",
        width:'100%'
      }
    }
    >
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/change' element={<ChangeCounter />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
