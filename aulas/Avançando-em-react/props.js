//props

//Props é um recurso fundamental do react
// Nos permite passar valores de um componente pai para um componente filho

//(props) tem o mesmo conceito do vue js 

//isso sera muito util quando os dados forem carregados via banco de dados, por exemplo

// as props vem em um objeto no argumento da função do componente 

const NomeDoComponente = (props) => {
    
    //bloco de codigo aqui!

    return(
        <div>
            JSX AQUI
        </div>
    )
}

//OBS caso queira passar props com valor numérico basta usar template expressions ex --> idade={23} --> isso serve tbm para valores booleanos! --> valor={true}

//A props é definida onde o componente é importado ex

// suponha que temos um componente chamado ComponenteFilho.jsx ele foi importado para ComponentePai.jsx dessa forma:

import react, {useState} from 'react'
import ComponenteFilho from './components/ComponenteFilho.jsx'

const ComponentePai = () => {


    //vamos passar a props name dentro da importação do componente
    return(
        <div>
            <ComponenteFilho name='Matheus'/>
            {/* dessa forma definimos que o componente ComponenteFilho recebe uma props com nome = name e valor = 'Matheus' */}
        </div>
    )

}

export default ComponentePai

//agora no componente ComponenteFilho em si, vamos definir na sua função de construção que ele recebera essa props

// props é uma via de mao dupla

// nós definimos o nome da props e seu valor no componente 'pai', e avisamos o componente 'filho' que ele recebera a props via argumentos!

//o componente filho no caso ficaria assim

import react, {useState} from 'react'


//vamos definir as props aqui!!
const ComponenteFilho = (props) => {


    return(
        //vamos agora passar par ao componente que ele vai acessar a props com nome de name --> props.name
        <div>
            Componente Filho recebe nome: {props.name}
        </div>
    )
}

// recordando

//1 - > passamos no componente pai , mais especifico na importação do componente filho qual a props ele está enviando (no caso, nome da props e o valor dela)

//2 - > dentro do componente filho avisamos dentro do argumento da função construtora do JSX que ele recebera props

//3 - > dentro do arquivo JSX no componente filho indicamos que o JSX ira receber o valor da props name enviada do componente pai da seguinte forma --->> props.name (a sintaxe é bem simples [ pasta colocar props.nomeDaPropsPassadaNoComponentePai ])

//OBS PODEMOS RECEBER VARIAS PROPS !!! não apenas uma

// tbm podemos definir o valor da props dinamicamente com template expressions

//veja




//                  Componente pai!


import React, {useState} from 'react'
//importação do componente filho
import ComponenteFilho from './components/ComponenteFilho.jsx'

const ComponentePai = () => {

    //iniciando o valor da constante name com  a string 'Matheus'
    const [name, setName] = useState('Matheus')

    return(
        //passando para o ComponenteFilho o valor da constante name como props
        <div>
            {/* a props pode ter qualquer nome que voce quiser, nesse caso eu a chamei de seuNome para não ficar confuso ou ter variaveis e props com o mesmo nome! */}
            <ComponenteFilho seuNome={name} />
        </div>
    )
}
export default ComponentePai


//Agora no ComponenteFilho!


import React, {useState} from 'react'

const ComponenteFilho = (props) => {

    return(

        <div>
            <h1>
                Vamos receber a props do componente pai aqui -->> {props.seuNome}
            </h1>
        </div>
    )
}

//ou seja, podemos passar valores via props de forma direta (nomeProps="valorProps") , usando variaveis(const x = 12 [ nomeProps={x} ]) ou usando useState com a sintaxe identica a uma variavel!



//podemos passar tbm listas e objetos como props veja só!

//dentro do componente pai passando uma lista de objetos e uma lista simples
import React, {useState} from 'react'
import ComponenteFilho from './components/ComponenteFilho'

function ComponentePai() {

  const [listaDeObjetos, setlistaDeObjetos] = useState([
    {
      id:12,
      name:'igor'
    },
    {
      id:123,
      name:'carlos'
    },
    {
      id:14142,
      name:'matheus'
    },
  ])

  const [listaSimples, setListaSimples] = useState([1,2,3,4,5,6,7])


  return (
    <div>
        <ComponenteFilho passandoObjeto={listaDeObjetos}  passandoLista={listaSimples}/>
    </div>
  )
}

export default ComponentePai


// agora dentro do componente filho vamos usa-las

import React, {useState} from 'react'


const ComponenteFilho = ({passandoObjeto, passandoLista}) => {


    return(
        <div>
            <ul>
                {/* aqui vamos criar uma lista com todos os nomes dos objetos! */}
                {passandoObjeto.map((values) => (
                    //passando como key os ids do objeto
                    <li key={values.id}>
                        {values.name}
                    </li>
                ))}
            </ul>
            
            {/* agora vamos criar uma lista para todos os numeros contidos na listaSimples que passamos via props */}

            <ul>
                {passandoLista.map((values, index) => (
                    <li key={index}>
                        {values}
                    </li>
                ))}
            </ul>

        </div>
    )

}