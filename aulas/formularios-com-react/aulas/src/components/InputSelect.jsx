import React, {useState} from 'react'

const InputSelect = ({user}) => {


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>
                    Selecione uma opção
                </span>
                <select name='dados' onChange={(e) => setData(e.target.value)} >
                    <option selected>Selecione</option>
                    <option value="editor">editor</option>
                    <option value="programador">programador</option>
                    <option value="socialista">socialista</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default InputSelect