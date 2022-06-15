// useRef

// o useRef pode ser utilizado como useState para gerenciar valores

// a diferença é que ele é um objeto, seu valor está na propriedade current

// outra particularidade do useRef é que ele não re-renderiza o componente ao ser alterado, sendo interessante em alguns casos

// para acessar o valor de uma referencia --> usamos current

const numberRef = useRef(0)

{numberRef.current} --> acessa o valor 0


import {useRef, useEffect , useState} from 'react'

const UseRefHook = () => {

    //useRef --> usado para criar referencias

    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    //se fizessemos a mesma coisa dentro do useEffect com um useState teriamos um loop infinito, ou seja, ele não re-renderiza o componente ao ser alterado
    useEffect(() => {
        numberRef.current = numberRef.current + 1
    },[])

  return (
    <div> 
        <h1>useRef</h1>
        <p>O componente renderizou: {numberRef.current} Vezes.</p>
        <p>Counter 1: {counter} </p>
        <button
            onClick={() => setCounter(counter + 1)}
        >
            Contador A
        </button>
        <p>Counter 2: {counter} </p>
        <button
            onClick={() => setCounterB(counter + 1)}
        >
            Contador B
        </button>
    </div>
  )
}

export default UseRefHook

//explicação rocketSeat

//ele não força o re-render

//fora que o valor não se perde ao recarregar a pagina




// useRef no DOm

//podemos capturar valores de um input, ou de qualquer elemento DOM usando a propriedade ref dentro da tag

//ex

const inputRef = useRef()

<input type='text' ref={inputRef} />



//ex completo

import {useRef, useState} from 'react'

const UseRefDom = () => {

  const inputRef = useRef()
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef)
    setText('')

    inputRef.current.focus()

  }

  return (
    <div>
        <h1>
            useRef no DOM
        </h1>
        <form
          onSubmit={handleSubmit}
        >
          <input type="text" ref={inputRef} name="text" value={text} onChange={(e) => setText(e.target.value)} />
          <input type="submit" value="Enviar" />
        </form>
        <h1>
          {inputRef.current.value}
        </h1>
    </div>
  )
}

export default UseRefDom