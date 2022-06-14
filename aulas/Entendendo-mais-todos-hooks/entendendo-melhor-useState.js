// entendendo melhor o useState


// useState é um dos principais hooks do react

// o principal proposito é gerenciar valores

// poderemos consultar um valor e alterar

// isso nos permite re-renderizar um componente, oque não acontence com a manipulação de variaveis



//use State e inputs

// atrelando o useState a um input podemos fazer algumas ações

// alteração de um state por evento de onChange, ou mesmo onClick

//limpeza de inputs (controlled input)

// Após o preenchimento total do form, unit os states e fazer um envio dos dados para o back-end

// ex

import {useState} from 'react'


function App() {
 
  const [stateInitial, setStateInitial] = useState('ola')

  const [name,setName] = useState('')
  const [age,setAge] = useState('')


  return (
    <div className="App">

      {/* 1 */}
      <h1>{stateInitial}</h1>
      <button
        onClick={() => setStateInitial('Bem vindo')}
      >
        Bem vindo
      </button>

      {/* 2 */}

      <h1>{name}</h1>
      <h1>{age}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setName('')
          setAge('')
        }}
      >
        <label>
          <span>Name</span>
          <input type="text" name="text" onChange={(e) => setName(e.target.value)}/>
        </label>
        <label>
          <span>Age</span>
          <input type="text" name="text" onChange={(e) => setAge(e.target.value)}/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default App
