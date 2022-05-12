// Classes dinamicas no css

// podemos tambem aplicar logica para mudar a classe de CSS de um elemento

// tambem utilizaremos o operador ternario 

// essa abordagem é mais interessante que o css inline!

// pois as classes estarao isoladas no arquivo de CSS resolvendo o problema de organização do codigo!

//nesse caso vamos usar o template expression dentro da tag className para usar uma condição para determinar o estilo da pagina

//ex

//componente pai

import React , {useState} from 'react'
import ComponenteFilho from './components/ComponenteFilho.jsx'

const App = () => {

    return(
        <div>
            <ComponenteFilho />
        </div>
    )
}

export default App


//componente filho

import React, {useState} from 'react'
//importando o arquivo css
import '../styles/ComponenteFilho.css'


const ComponenteFilho = () => {

    //vamos criar uma variavel que pode alternar de verdadeiro para falso

    const [data, setData] = useState(false)

    const handleData = () => {
        return setData(!data)
    }

    return(
        <div
        //vamos fazer um operador ternario para definir um estilo quanto ao valor da constante data
        {data ? 'cor__azul' : 'cor__verde'}

        >
            <h1>
                Aqui temos um paragrafo!
            </h1>
            <button
                onClick={handleData}
            >
                Clique aqui para alterar a cor
            </button>
        </div>
    )
}


export default ComponenteFilho


// CSS do componente filho!

// .cor__azul{
//     color: blue;
// }

// .cor__verde {
//     color: green ;
// }



/// DESSA FORMA SEMPRE QUE CLICARMOS NO BOTAO VAI SER ALTERADO O VALOR DA CONSTANTE DATA DE FALSE PARA TRUE, COM ISSO A CONDIÇÂO MUDA, SE FOR TRUE ATENDE A CONDIÇÃO ONDE  O CLASSNAME É 'cor__azul' SE FOR FALSE ATENTE A CONDIÇÃO ONDE O CLASSENAME È 'cor__verde'