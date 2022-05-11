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
