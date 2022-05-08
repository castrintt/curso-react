import React from 'react'

const Challenge = () => {

    let numero1 = 15
    let numero2 = 12

    function soma(x, y) {
        return x + y
    }

    const [valor, setValor] = React.useState(false)

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
                onClick={() => {
                    setValor(!valor)
                }}
            >
                Clique aqui para somar

            </button>
            <h1 id='merda'>
                Resultado: {
                    valor == true ? soma(numero1, numero2) : 'Castro amante do romulo'
                }
            </h1>
        </div>
    )
}

export default Challenge
