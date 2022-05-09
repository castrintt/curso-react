//renderização condicional 


// é quando imprimimos uma parte do template baseado em uma condição

// ou seja, utilizando chacagem com if else if e else (NESSE CASO USAMOS O OPERADOR TERNARIO!!!!!!)
//operador ternario --> condição ? se for true : se for false

// isso é interessante em situações como: usuario autenticado/não autenticado

//ex de renderização condicional usando operador ternario

//LEMBRE-SE BEM DO OPERADOR TERNARIO ELE É MUITO USADO!!!

//OBS --> SEMPRE COLOCAR O RETORNO TRUE E FALSE DO OPERADOR TERNARIO ENTRE PARENTESES PARA INDICAR OM JSX QUE VAI SER RETORNADO, CASO A ESTRUTURA SEJA MUITO SIMPLES, QUE VOCÊ NÃO PRECISA DE MAIS DE UMA LINHA DE CODIGO NÃO PRECISA!!

import react, {useState} from 'react'

const Conditional = () => {

    //iniciando o estado da constante x como true!

    const [x, setX] = useState(true)


    function handleMudaX() {
        // a cada clique no botao altera o estado da variavel, nesse caso alterna de true para false e vice-versa
        setX(!x)
    }

    return (
        <div>
            <h1>
                Se o estado de x for true renderiza 'SIM', se o estadod e x for false renderiza 'NÃO'
            </h1>
            <br />
            <h1>
                {/* usando operador ternario para indicar que, se x for true renderiza SIM se for false renderiza NÃO */}
                {x 
                ? (
                <p>SIM</p>
                ): (
                <p>NÃO</p>)
                }
            </h1>
            <button
                onClick={handleMudaX}
            >
                Clique aqui para mudar o estado de X
            </button>
        </div>
    )
}

export default Conditional