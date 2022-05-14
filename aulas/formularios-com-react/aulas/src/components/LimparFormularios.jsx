import React, {useState} from 'react'

const LimparFormularios = () => {

    const [name , setName] = useState('')
    
    // console.log(name)

    const handleSubmit = (e) => {
        e.preventDefault()
        setName('')
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

  return (
    <div>
        <form 
            onSubmit={handleSubmit}
        >
            <label>
                <span>
                    Nome: 
                </span>
                <input type="text" name="name" 
                    onChange={handleName}
                />
            </label>
            <input type="submit" value="Enviar Formulario" />
        </form>
    </div>
  )
}

export default LimparFormularios