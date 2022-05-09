import diablo from './assets/diablo4-imagem.jpg'
import ManageData from './components/ManageData.jsx'
import Teste from './components/Teste.jsx'
import Listas from './components/Listas.jsx'
import RenderizacaoCondicional from './components/RenderizacaoCondicional'
import PassandoProps from './components/PassandoProps'
import React, {Fragment, useState} from 'react'
import DesestruturandoProps from './components/DesestruturandoProps'
import PropsDeObjetos from './components/PropsDeObjetos'
import CarDetails from './components/CarDetails'
import NameDetails from './components/NameDetails'
import Fragments from './components/Fragments'



function App() {

  let titulo = 'Imagem de gameplay vazada sobre diablo 4 '

  const [nameDinamico, setNameDinamico] = useState('Carlos!')

  const [dados, setDados] = useState([
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

  const [numeros, setNumeros] = useState([
    1,2,3,4,5,6,7,8
  ])

  
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
      <h1>
        Iniciando nova seção
      </h1>
      {/* inserindo imagens dentro do projeto! */}
        <img src={diablo} alt={titulo}  style={{ 
          width:'600px',
          height:'350px'
        }}/>
        {/* usando o hook state */}

        <ManageData />
        <br />
        <Teste />
        <br />
        <Listas />
        <br />
        <RenderizacaoCondicional />
        <br />
        {/* Vamos passar para esse componente uma props chamada name (poderia ser qualquer nome)
        para isso passamos o nome da prop(nesse caso é 'name') e o valor dela */}
        <PassandoProps name='igor' newName={nameDinamico}/>
        {/* passamos tbm  props usando template expressions junto ao useState! */}
        {/* podemos passar quantas props quiser!! */}

        <br />
        <DesestruturandoProps name='Marcelo' age={23}/>
        <br />
        <PropsDeObjetos passandoObjeto={dados} passandoListaSimples={numeros} />
        <br />
        {/* reaproveitando componentes usando props!!! */}
        <CarDetails marca='fiat' km={12939} cor='vermelho' estado={true}/>
        <CarDetails marca='Volks' km={112} cor='preto' estado={false}/>
        <CarDetails marca='fiat' km={0} cor='azul' estado={true}/>
        <CarDetails marca='BMW' km={0} cor='branca' estado={false}/>
         {/* dessa forma aproveitamos o mesmo componente passando informações diferentes para ele!! */}

         {/* criando um loop de renderização em componentes */}

        
        {userData.map((values) => (
          <NameDetails name={values.name} age={values.age} profession={values.profession} key={values.id}/>
        ))}

          <Fragments />
    </div>
  )
}

export default App
