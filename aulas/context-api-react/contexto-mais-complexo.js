// Contexto mais complexo

//Contextos mais complexos podem ter variações no comportamento

// para isso vamos utilizar um hook chamado useReducer

// que é como um useState, mas para controle de dados complexos

//no reducer teremos diferentes ações com um switch

// e na aplicação vamos consumir o estado atual do dado que esta no reducer

//basicamente o useState controla um dado somente e useReducer controla varios dados

// da mesma forma que o useState o useReducer recebe uma variavel com o estado atual e uma variavel para alterar o estado

//porem o useReducer recebe o state e o dispatch como variaveis, e recebe como parametro o reducer e o initialState

// initialState --> estado inicial de pequenos estados, geralmente é um objeto que contem cada estado inicial de varios estados pequenos ---> logo um objeto armazena todos os estados iniciais

// reducer ---> é uma função que determina cada ação que vamos fazer com cada estado presente 


//logo:

import {useReducer} from 'react'

const [state, dispatch] = useReducer(reducer, initialState)

// vamos motar o initialState, criando um objeto com 2 chaves representando 2 estados diferentes

const initialState = {
    valor1:1,
    valor2:2
}

//vamos agora criar a função reducer, que recebe como parametro state e action

// state --> objeto que armazena todos os estados

//action --> ação que vai ser tomada // alteração para cada estado, ação que estamos solicitando

const reducer = (state, action) => {
    //action é um objeto e recebe um type (que é o tipo de ação que estamos solicitando), lembrando que usamos o switch para determinar ações
    switch (action.type){
        //case
        case 'incremento':
            return {
                //retorna um objeto com a chave que deseja alterar recebendo state.chave e oque ela muda
                valor1: state.valor1 + 1,
                valor2: state.valor2 + 2
            }
        case 'decremento':
            return {
                valor1: state.valor1 - 1,
                valor2: state.valor2 - 2
            }
        default:
            return state
    }
}

//essa é a configuração basica de uma função reducer

// agora vamos definir dentro do jsx um title que recebe o valor1 e outro title que recebe valor2, e vamos criar 2 botoes um que incrementa e outro que decrementa com os parametros que passamos

import React, { useReducer, useState }  from 'react'



const App = () => {

  const initialState = {
    valor1: 1,
    valor2: 2
  }

  const reducer = (state, action) => {
    switch (action.type){
        case 'incremento':
            return {
                valor1: state.valor1 + 1,
                valor2: state.valor2 + 2
            }
        case 'decremento':
            return {
                valor1: state.valor1 - 1,
                valor2: state.valor2 - 2
            }
        default:
            return state
    }
}

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <>
      <div>
          <h1>
            useReducer
          </h1>
         
            <h2>
{/* valor do state inicial da primeira chave do objeto state */}
                {state.valor1}
            </h2>
            <h2>
{/* valor do state inicial da segunda chave do objeto state */}
                {state.valor2}
            </h2>
            <div>
                {/* botoes */}
                {/* para os botoes vamos usar o dispatch que é basicamente oque 'chama as alterações que configuramos na função reducer' */}
                <button 
                    onClick={() => dispatch({type: 'incremento'})} //recebe um objeto com o type da ação
                >
                    incrementar
                </button>
                {/* dessa forma o dispatch vai acessar o switch definido dentro da função reducer, verificar o type da action (action.type), o case que der match com o type vai ser executado */}
                <button
                    onClick={() => dispatch({type:'decremento'})}
                >
                    decrementar
                </button>
            </div>

      </div>
    </>
  )
}

export default App

// temos outra variavel para action diferente de type, chamada de payload

//payload basicamente armazena um dado inserido pelo usuario

// PEGANDO INFORMAÇÕES DE INPUTS , TRABALHANDO COM useState e useReducer em conjunto

import React, {useReducer, useState} from 'react'

const About = () => {
    //setando os estados para resgatar o valor dos inputs via onChange
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)

    //setando o intialState (estado incial) dos dados como strings vazias
  const initialState = {
    nome:'',
    email:''
  }

  //dentro de reducer(função responsavel por configurar as alterações que o dispatch vai 'chamar')
  const reducer = (state, action) => {
    switch(action.type) {
      case 'enviar':
        return {
            //recebendo o state dos inputs (usando o state do useState)
          nome: name, 
          email: email
        }
        default:
            return state
    }
  }

  //declarando o useReducer 
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
      <h1>
        Nome: {state.nome} <br />
        Email: {state.email}
      </h1>

      <form>
        <label>
          <span>Nome</span>
          {/* pegando valores dos inputs e enviando para os estados name e email */}
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <span>Email</span>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>

        {/* ao clicar em enviar vai ser ativado o switch (usamos o dispatch para ativar!) , mais especificamente o case 'enviar' que altera o valor das 2 chaves do state de useReducer */}
        <input type="submit" value="Enviar" onClick={(e) => {
            e.preventDefault()
            return dispatch({type:'enviar'})
        }}/>
      </form>
    </div>
  )
}

export default About