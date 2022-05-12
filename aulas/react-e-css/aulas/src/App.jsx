import { useState } from 'react'
import CssDinamico from './components/CssDinamico'
import MyComponent from './components/MyComponent'
import MudaCorUsandoCssComClasseDinamica from './components/MudaCorUsandoCssComClasseDinamica.jsx'
import CssModules from './components/CssModules'

function App() {

  return (
    <div className="App">
      <h1>
        Bem vindo a nova seção!
      </h1>
      <MyComponent />

      {/* css dinamico */}
      <CssDinamico />
      <MudaCorUsandoCssComClasseDinamica />
      {/* usando css scoped com Componente.module.css */}

      <CssModules />

    </div>
  )
}

export default App
