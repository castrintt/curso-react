import React from 'react'



const ManageData = () => {

    let someData = 10

    const [alteraValor, setValor] = React.useState(15) 
    //inicializamos o valor  da variavel como 15
    
    return (
        <div>
            <p>
                Valor: {someData}
            </p>
            {/* suponha que precisamos alterar o valor de someData via botao */}

            <button
                onClick={() => someData = 15}
            >
                Clique aqui para alterar
            </button>

            <p>
                Valor alterado: {alteraValor}
            </p>
            <br />
            <button
                onClick={() => setValor(20)} 
                //aqui estamos alterando o valor usando o setValor que é a função do hook
            >
                Alterar valor Alterado
            </button>

        </div>
    )
}

export default ManageData