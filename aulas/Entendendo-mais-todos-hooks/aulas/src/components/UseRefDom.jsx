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