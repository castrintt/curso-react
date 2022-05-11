//children prop

//e um recurso utilizado para quando um componente precisa ter JSX dentro dele

//porem este JSX vem do componente pai

//entao o componente age como um container, abraçando estes elementos

// e children é considerada uma prop do componente

// para definir uma children prop, dentro da importação do componente vamos usar a tag de abertura e fechamento do componente, ao inves de usar somente o fechamento

// ex tag fechamento --> <Container />

// ex tag abertura e fechamento ---> <Container > conteudo aqui </Container >

//vamos usar o children da mesma maneira que fazemos com o props

// no componente pai temos

import React, {useState} from 'react'
import Container from './components/Container.jsx'


const App = () => {

    return(
        //temos uma tag de abertura e fechamento do container importado! (no caso seria o componente filho )
        <div>
            <Container >
                <p>
                    Temos um conteudo!
                </p>
            </Container>
        </div>
    )
}

export default App

// para avisarmos o componente filho que ele deve usar esse paragrafo que foi definido dentro da tag( <Container > paragrafo </Container>) vamos dentro do componente filho(nesse caso Container.jsx) e vamos definir nos argumentos que receberemos uma children

// componente filho

import React, {useState} from 'react'

//chamando children dentro dos argumentos e posteriormente chamando ele dentro do documento JSX ela vai ser renderizada junto ao titulo ('Aqui temos um titulo!')
const Container = ({children}) => {
    return(
        <div>
            <h1>
                Aqui temos um titulo!
            </h1>
            {children}
        </div>
    )
}

export default Container

//podemos tambem passar propriedades dentro do import do Container no componente pai, e acessa-los no componente filho (ou seja o conceito de props não se altera usando children)

//ex
// componente pai

import React, {useState} from 'react'


const App = () => {

    //vamos passar aqui uma variavel usando useState para passar para o componente Componente uma props

    const [x, setX] = useState('Valor de x é 10!')

    return(
        <div>
            {/* passando props para o componente! */}
            <Componente valor={x}>
                <p>Esse é meu texto</p>
            </Componente>
        </div>
    )
}

export default App


//agora dentro do componente filho (Componente) vamos acessar da mesma forma que acessavamos as props antes (como argumentos)


import React, {useState} from 'react'


const Componente = ({children, valor}) => {
    //valor é a props, children é a children props
    return(
        <div>
            <h1>
                Aqui temos um titulo
            </h1>
            {/* vamos acessar agora a children */}
            {children}
            {/* vamos acessar agora a prop */}
            {valor}
        </div>
    )
}

export default Componente