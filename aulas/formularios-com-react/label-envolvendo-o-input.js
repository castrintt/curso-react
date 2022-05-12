//Label envolvendo o input

// Em React um padrao comum é a tag label envolvendo o input

// isso faz com que o atributo for se torne opcional

// Simplificando nossa estrutura HTML, sem perder a semântica

// ficaria assim

// Componente MyForm.jsx

import React, {useState} from 'react'

const MyForm = () => {

    return(
    <>
        <form>
            <div>
                <label>
                    <span>Email:</span> 
                    <input type="email" name="email"  placeholder='Digite o seu email!'/>
                </label>
            </div>
        </form>
    </>
    )
}

export default MyForm

// Lembrando que não perdemos a semântica do HTML

//fora isso é a forma que esta como recomendada na documentação do React!
