import React from 'react'

const Teste = () => {


    let x = 10

    let y = 20

    const [resultado, setResultado] = React.useState(false)

    function soma(x,y){
        return x + y
    }

    function alteraResultado(e){
        if (resultado == false){
            setResultado(!resultado)
            return
        }else{
            setResultado(!resultado)
            return
        }
    }


  return (
    <div>
        <h1>
            valor 1: {x}
        </h1>
        <h1>
            valor 2: {y}
        </h1>
        <button
            onClick={alteraResultado}
        >
            Soma valor 1  e valor 2
        </button>

        <h1>
            Resultado da soma: {
                resultado == true ? soma(x,y) : '0'
            }
        </h1>
    </div>
  )
}

export default Teste