import diablo from './assets/diablo4-imagem.jpg'
import ManageData from './components/ManageData.jsx'
import Teste from './components/Teste.jsx'
import Listas from './components/Listas.jsx'
import RenderizacaoCondicional from './components/RenderizacaoCondicional'
import PassandoProps from './components/PassandoProps'
import React, {useState} from 'react'
import DesestruturandoProps from './components/DesestruturandoProps'

function App() {

  let titulo = 'Imagem de gameplay vazada sobre diablo 4 '

  const [nameDinamico, setNameDinamico] = useState('Carlos!')

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

    </div>
  )
}

export default App
