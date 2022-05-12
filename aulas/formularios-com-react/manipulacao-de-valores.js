// Manipulação de valores 

// para manipular valores dos inputs vamos utilizar o hook useState

// ou seja podemos armazenar na variavel e utilizar o set para alterar o valor

// vamos criar uma função para alterar o valor no evento onChange


// deixando nosso codigo facil de trabalhar nas proximas etapas: como envio dos dados para BD (banco de dados)e validação

//vamos ver como funciona

// no componente pai, vamos somente importar o componente filho (que sera usado como base para pegar a informação de um input)

//componente pai

import React, {useState} from 'react'
import ComponenteFilho from './components/ComponenteFilho.jsx'

const App = () => {

    return(
        <div>
            <ComponenteFilho />
        </div>
    )
}

export default App


// agora veremos o componente filho
// 1) primeiro veremos como fazer a alteração usando onChange inline

import React, {useState} from 'react'

const ComponenteFilho = () => {

    //iniciando o valor da constante valor como uma string vazia
    const [valor, setValor] = useState('')

    //declarando uma função que mostrara no console o email colocado pelo usuario
    const handleConsole = (e) => {
        e.preventDefault()
        console.log(valor)
    }

    return(
        <div>
            <form>
                <label>
                    <span>
                        Digite seu Email
                    </span>
                    {/* Usando o evento onChange definimos na funcao setValor (que basicamente é responsavel por alterar o value da constante chamada valor), ela pegara a informação no input e vai definir como value da constante valor */}
                    <input type="email" name="email" placeholder='Digite seu email!' onChange={(e) => {
                        
                        setValor(e.target.value)
                    }}/>
                </label>
                {/* usamos um botao para enviar de fato para o console, onde podemos observar que o value da constante valor foi alterado */}
                <button
                    onClick={handleConsole}
                >
                    Clique e veja o console!
                </button>
            </form>
        </div>
    )
}

export default ComponenteFilho


// 2 ) agora veremos como fazer por uma funçao
//componente filho

import React, {useState} from 'react'

const ComponenteFilho = () => {

    //iniciando o valor da constante valor como uma string vazia
    const [valor, setValor] = useState('')

    //declarando uma função que mostrara no console o email colocado pelo usuario
    const handleConsole = (e) => {
        e.preventDefault()
        console.log(valor)
    }

    //vamos criar uma função que altere de fato o value da constante valor usando setValor
    const handleValor = (e) => {
        setValor(e.target.value)
    }

    return(
        <div>
            <form>
                <label>
                    <span>
                        Digite seu Email
                    </span>
                {/* definimos uma função que altera o value da constante valor */}
                    <input type="email" name="email" placeholder='Digite seu email!' onChange={handleValor}/>
                </label>
                {/* usamos um botao para enviar de fato para o console, onde podemos observar que o value da constante valor foi alterado */}
                <button
                    onClick={handleConsole}
                >
                    Clique e veja o console!
                </button>
            </form>
        </div>
    )
}

export default ComponenteFilho


//OBS -->>> em ambos temos o mesmo resultado , porem da primeira forma usando inline é mais simples!
