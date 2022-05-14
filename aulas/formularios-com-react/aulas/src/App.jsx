import { useState } from 'react'
import ManipulandoValores from './components/ManipulandoValores'
import MyForm from './components/MyForm'
import EnvioDeForms from './components/EnvioDeForms.jsx'
import ControlledInputs from './components/ControlledInputs'
import LimparFormularios from './components/LimparFormularios'
import TextArea from './components/TextArea'
import InputSelect from './components/InputSelect'


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
     <h1>
       Aula de Controlled inputs
     </h1>
     {/* //vamos passar para o componente ControlledInputs um objeto com algumas informações, porem vamos passar direto via props, sem criar uma constante e usar o useState */}
     {/* para isso vamos definir 2 colchetes, o primeiro para definir o template expression, e o segundo para definir o objeto */}
     <ControlledInputs user={{
       name:'Josias',
       email:'josias@gmail.com'
     }}  />
    <h1>
      Limpando formularios
    </h1>
    <LimparFormularios />
     <h1>
       Text area
     </h1>
     <TextArea />
     <h1>
       Usando input Select
     </h1>
       <InputSelect
        user={{
          name:'Josias',
          email:'josias@gmail.com'
        }}
       />

    </div>
  )
}

export default App
