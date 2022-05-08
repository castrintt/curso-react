// crie um componente chamado challenge
// importe-o em App.js
//no componente criado faça a criação de dois valores numericos imprima ests valores no componente
// crie tambem um evento de clique que soma estes dois valores e exibe no console


import React from 'react'

function Challenge(){
    let numero1 = 15

    let numero2 = 12
    
    function handleSoma(){
        console.log(numero1 + numero2)
    }   
    return (
        <div>
            <h1>
                Numero 1: {numero1}
            </h1>
            <br />
            <h1>
                Numero 2: {numero2}
            </h1>
            <br />
            <button
                onClick={handleSoma}
            >
                Clique aqui para somar

            </button>
        </div>
    )
}
