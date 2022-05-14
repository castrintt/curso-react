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