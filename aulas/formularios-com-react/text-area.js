// input Text Area

// o text area pode ser considerado um input de texto normal

// utilizaremos o value para alterar o state inicial

// e o evento onChange para modificar o valor do state

import React, {useState} from 'react'

const TextArea = () => {

    
    const [text, setText] = useState('Digite seu texto aqui')

  return (
    <div>
        <textarea 
        name="texto" 
        id="texto" 
        cols="30"
        rows="10"
        onChange={(e) => {
            setText(e.target.value)
        }}
        value={text}
        placeholder='Digite seu texto aqui'
         >

         </textarea>
    </div>
  )
}

export default TextArea

// nada de extraordinario, temos os mesmos atributos que um input de texto normal