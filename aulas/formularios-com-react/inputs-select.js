// Input de select

// O select tambem sera muito semelhante aos outros inputs

// quando temos a alteração de um valor o evento onChange pode captar isso

// O value tambem pode atribuir qual option estará selecionada

//tenha em vista um componente filho!

import React, {useState} from 'react'

const InputSelect = () => {

    const [data, setData] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data) // para pegar no console se de fato está sendo alterado o valor de daota
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

// com isso, a opção que está marcada no select vai ser o valor da constante data!
