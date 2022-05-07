import PrimeiroComponente from './components/PrimeiroComponente.jsx'
import TemplateExpressions from './components/TemplateExpressions.jsx'
import Criando from './components/Criando.jsx'
import Eventos from './components/Eventos.jsx'
import Renderizacao from './components/Renderizacao.jsx'

function App() {
  return (
    <div className="App">
     <h1>
       Aqui temos o componente principal
     </h1>
     <PrimeiroComponente/>
     <TemplateExpressions />
     <Criando />
     <Eventos />
     <Renderizacao />
    </div>
  )
}

export default App
