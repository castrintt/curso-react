// Resentando formularios // limpando

// com o controler inputs limpar o form será facil

// basta atribuir o valor de uma string vazia aos state e pronto!

// isso sera feito após o envio, em formularios que o usuario precisa preencher novamente!

// vamos usar a função de onSubmit para zerar os valores dos inputs

import React, {useState} from 'react'

const LimparFormularios = () => {

    const [name , setName] = useState('')
    
    // console.log(name)
    // dentro de handleSubmit (que é o evento para enviar o formulario) setamos q o setName (função responsavel por mudar o state de uma variavel) como uma string vazia, dessa forma o formulario sera resetado apos uso
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