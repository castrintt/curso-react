import { useState, useContext } from 'react'

import UseReducerHook from './components/UseReducerHook'
import UseReducerActions from './components/UseReducerActions'
import UseEffectHook from './components/UseEffectHook'

import {SomeContext} from './context/SomeContext'
import UseRefHook from './components/UseRefHook'
import UseRefDom from './components/UseRefDom'
import UseCallBack from './components/UseCallBack'
import List from './components/List'
import UseMemo from './components/UseMemo'
import UseLayoutEffect from './components/UseLayoutEffect'
import UseImperativeHandle from './components/UseImperativeHandle'


function App() {

  const [stateInitial, setStateInitial] = useState('ola')

  const [name, setName] = useState('')
  const [age, setAge] = useState('')


  const {texto} = useContext(SomeContext)

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
        <UseEffectHook />
        <h1>{texto}</h1>
        <UseRefHook />
        <UseRefDom />
        <UseCallBack />
        <UseMemo />
        <UseLayoutEffect />
        <UseImperativeHandle />
    </div>
  )
}

export default App
