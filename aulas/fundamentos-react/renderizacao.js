//Funções de renderização

// Podemos criar funções que retorna um jsx

// isso serve para criar situações que dependam de outras condições

// ou seja, o JSX a ser renderizado pode varia por alguma variavel por exemplo!!


//ex

import React from 'react'

const Renderizacao = () => {
    //condição para renderização do componente
    function handleRender(value) { 
        if (value == true){ // se verdadeiro retorna o componente abaixo
            return (
                <div>
                    <h1>Componente renderizado!!!</h1>
                </div>
            )
        }else{ // se falso retorna o componente abaixo
            return (

                <div>
                    <h1>
                        Componente antes da renderização!
                    </h1>
                </div>
            )
        }
    }

    return (
        <div>
            {handleRender(true)} 
            {/* chamando a execução do metodo para que aconteça a renderização do componente a partir de uma condição */}
        </div>
    )
}

export default Renderizacao

