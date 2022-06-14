import { useState } from 'react'

import UseReducerHook from './components/UseReducerHook'
import UseReducerActions from './components/UseReducerActions'


function App() {

  const [stateInitial, setStateInitial] = useState('ola')

  const [name, setName] = useState('')
  const [age, setAge] = useState('')



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
          <input type="text" name="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <span>Age</span>
          <input type="text" name="text" onChange={(e) => setAge(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
        <UseReducerHook />
        <UseReducerActions />
    </div>
  )
}

export default App
