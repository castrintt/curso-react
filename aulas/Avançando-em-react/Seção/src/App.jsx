import diablo from './assets/diablo4-imagem.jpg'
import ManageData from './components/ManageData.jsx'
import Teste from './components/Teste.jsx'
import Listas from './components/Listas.jsx'

function App() {

  let titulo = 'Imagem de gameplay vazada sobre diablo 4 '

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


    </div>
  )
}

export default App
