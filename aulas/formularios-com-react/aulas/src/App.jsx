import { useState } from 'react'
import ManipulandoValores from './components/ManipulandoValores'
import MyForm from './components/MyForm'
import EnvioDeForms from './components/EnvioDeForms.jsx'


function App() {
 
  return (
    <div className="App">
     <h1>
       Bem vindo a nova seção!
     </h1>
     <hr />
     <h1>
       Criando formulario
     </h1>
     <MyForm />
     <hr />
     <h1>
       Aula manipulando valores
     </h1>
     {/* vamos ver agora como manipulamos valores de um input usando useState */}
     <ManipulandoValores />
     {/* enviando formularios usando o onSubmit (lembrando de usar o e.preventDefault()) */}
     <hr />
     <h1>
       Aula de envio de forms
     </h1>
     <EnvioDeForms />
    </div>
  )
}

export default App
