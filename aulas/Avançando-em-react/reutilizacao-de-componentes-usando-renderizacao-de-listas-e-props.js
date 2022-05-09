//Reutilização de componentes usando renderização de listas (loops) e props

//os arrays de dados podem ter muitos itens tambem

//entao o correto é utilizar uma estrutura de loop( map ) para sua exibição

// e com isso conseguimos conciliar os tres conceitos: renderização de listas, reaproveitamento de componentes e props

//pense que temos um componente pai (App) que renderiza um componente chamado NameDetails

// componente pai

import React, {useState} from 'react'
import NameDetails from './components/NameDetails'

function App() {

  const [userData, setUserData] = useState([
    {
      id:Math.floor(Math.random() * 100000),
      name:'Igor',
      age:23,
      profession:'Programador'
    },
    {
      id:Math.floor(Math.random() * 100000),
      name:'Matheus',
      age:24,
      profession:'Empreendedor'
    },
    {
      id:Math.floor(Math.random() * 100000),
      name:'Carla',
      age:70,
      profession:'Professora'
    },
    {
      id:Math.floor(Math.random() * 100000),
      name:'Carlos',
      age:32,
      profession:'Cobrador'
    },
    {
      id:Math.floor(Math.random() * 100000),
      name:'Maria',
      age:14,
      profession:'Estudante'
    },
  ])

  

  return (
    <div className="App">
        {userData.map((values) => (
          <NameDetails name={values.name} age={values.age} profession={values.profession} key={values.id}/>
        ))}
    {/* //dessa forma vamos ter um loop de criação para o componente <NameDetails /> */}
    {/* estamos passando como props todos os valores que vão constituir os dados do componente filho (NameDetails) */}
    </div>
  )
}

export default App


//componente filho (NameDetails.jsx)

import React, {useState} from 'react'

const NameDetails = ({name, age, profession}) => { //recebendo as props passadas no componente pai (App)
  return (
    <div>
        <p>
            Nome do usuario : {name}
            <br />
            <hr />
            Idade do usuario : {age}
            <br />
            <hr />
            Profissão do usuario : {profession}
        </p>
        <br /><br />
    </div>
  )
}

export default NameDetails