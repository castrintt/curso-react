// Desafio

// crie um array de objetos compostos de pessoas, com as propriedades de :

//nome, idade e profissão (array com pelo menos 3 itens)

// os dados devem ser exibidos em um componente UserDetails, que voce deve criar, todas as informações devem ser exibidas

// faça uma renderização condicional que exibe se o usuário pode tirar a carteira de habilitação ou nao, imprima isso também no componente

// a informação pode ser exibida num paragrafo (checar se idade >= 18)

//RESPOSTA

//componente pai (App)

import { useState } from 'react'
import UserDetails from './components/UserDetails'

function App() {

  const [userData, setUserData] = useState([
    {
      id:1,
      nome:'Igor',
      idade:23,
      prof:'Programador'

    },
    {
      id:2,
      nome:'Isabela',
      idade:17,
      prof:'Estudante'

    },
    {
      id:3,
      nome:'Ribas',
      idade:23,
      prof:'Médico'

    },
  ])


  return (
    <div className="App">
      <h1
        style={
          {
            backgroundColor:'black',
            color:'white',
            textAlign:'center',
            textTransform:'uppercase'
          }
        }
      >Componente pai está aqui!</h1>

        {/* resolução 1 */}

      {/* {userData.map((values) => (
        <UserDetails key={values.id}  data={values} />
      ))} */}


      {/* resolução 2 */}

      {userData.map((values) => (
        <UserDetails nome={values.nome} idade={values.idade} prof={values.prof} />
      ))}
    </div>
  )
}

export default App


//componente UserDetails

import React from 'react'

//resolução 1

// const UserDetails = ({data}) => {
//   return (
//     <div 
//         style={{
//             textAlign:'center',
//             margin:'0 auto',
//             border:'1px solid black',
//             height:'150px'
//         }}
//     >
//         <h1>
//             Nome usuário : {data.nome}
//         </h1>
//         <p>
//             tem {data.idade} anos de idade e tem como profissão {data.profissao}
//         </p>

            // {values.idade >= 18 ? (<p>Pode tirar a carteira! você é maior de idade!</p>) : (<p>Infelizmente você ainda não pode tirar carteira!</p>)}

//     </div>
//   )
// }


//resolução 2

const UserDetails = ({nome, idade, prof}) => {
    return (
      <div 
          style={{
              textAlign:'center',
              margin:'0 auto',
              border:'1px solid black',
              height:'150px'
          }}
      >
          <h1>
              Nome usuário : {nome}
          </h1>
          <p>
              tem {idade} anos de idade e tem como profissão {prof}
          </p>
  
          {idade >= 18 ? (<p>Pode tirar a carteira! você é maior de idade!</p>) : (<p>Infelizmente você ainda não pode tirar carteira!</p>)}
  
      </div>
    )
  }
export default UserDetails