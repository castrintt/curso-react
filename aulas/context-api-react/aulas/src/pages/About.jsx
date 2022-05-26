// import React, { useReducer, useState }  from 'react'



// const About = () => {

//   const [num, setNum] = useState(0)

//   const initialState = {
//     count: 0
//   }

//   const reducer = (state, action) => {
//     switch(action.type) {
//       case 'increment':
//         return{
//           count: state.count + 1
//         }
//       case 'decrement':
//         return {
//           count: state.count - 1
//         }
//       default:
//         return state
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, initialState)




//   return (
//     <>
//       <div>
//           <h1>
//             useState
//           </h1>
//             <div
//               style={
//                 {
//                   display:'flex',
//                   flexDirection:'row'
//                 }
//               }
//             >
//               <button onClick={() => setNum(num + 1)}> + </button>
//               <h1>
//                 {num}
//               </h1>
//               <button onClick={() => setNum(num - 1)}> - </button>
//             </div>

//       </div>
//       <div>
//           <h1>
//             useReducer
//           </h1>
//           <div
//               style={
//                 {
//                   display:'flex',
//                   flexDirection:'row'
//                 }
//               }
//             >
//               <button onClick={() => dispatch({type:'increment'})} > + </button>
//               <h1>
//                 {state.count}
//               </h1>
//               <button onClick={() => dispatch({type:'decrement'})}> - </button>
//             </div>

//       </div>
//     </>
//   )
// }

// export default About

import React, {useReducer, useState} from 'react'

const About = () => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)

  const initialState = {
    nome:'',
    email:''
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'enviar':
        return {
          nome: name,
          email: email
        }
    }
  }

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
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          <span>Email</span>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" onClick={(e) => {
            e.preventDefault()
            return dispatch({type:'enviar'})
        }}/>
      </form>
    </div>
  )
}

export default About