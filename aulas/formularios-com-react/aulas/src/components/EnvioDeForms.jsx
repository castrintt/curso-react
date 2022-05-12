import React, {useState} from 'react'

const EnvioDeForms = () => {

    const [dado, setDado] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Enviando formulario')

    }


  return (
    <div>
        <form 
             onSubmit={(e) => {
                e.preventDefault()
            }}
        >
            <div>
                <label>
                    <span>Digite seu email</span>
                    <input
                     type="email"
                     name="email"
                     placeholder='Digite seu email'
                     onChange={(e) => setDado(e.target.value)}
                     //dessa forma temos acesso ao valor que o usuario escrever dentro do input
                     />
                </label>
            </div>
            <input type="submit"
            value="Enviar Formulario"    
            />
        </form>
    </div>
  )
}

export default EnvioDeForms