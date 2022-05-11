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