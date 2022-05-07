// hierarquia de componentes

// os componentes criados podem ser reutilizados em varios outros componentes
// ou seja, evita repetição de codigo e deixa ele 10 vezes mais organizado e simples de entender / fazer alterações

//componentes podem formar uma hierarquia, sendo importados uns dentro dos outros, como fizemos em App

// veja no exemplo a seguir

//foi criado um arquivo jsx chamado Criando.jsx, nele esta contido o seguinte codigo ( é um componente que sera importado em varios outros! )

import React from 'react'

const Criando = () => {
    return (

        <div>
            <h1>
                eu estou sendo utilizado em varios lugares!!!
            </h1>
        </div>

    )
}

export default Criando


// vamos importa-lo agora dentro de outro componente, para isso vamos usar o componente PrimeiroComponente.jsx, que contem o seguinte codigo

import React from 'react'
import '../styles/principal.css'

// importando componente Criando
import Criando from './aula-componentes/criando-componentes/src/components/Criando.jsx'


const PrimeiroComponente = () => {
  return (
    <div className='componente'>
        <h1>
            Aqui temos um componente novo!
        </h1>
        {/* usando o componente importado */}
        <Criando />
    </div>
  )
}

export default PrimeiroComponente


//note a simplicidade para reutilizar um componente!!

//agora vamos fazer o mesmo para outro componente!

//componente utilizado para reutilizar o Criando.jsx sera o --> App.jsx

//que contem o seguinte codigo


import PrimeiroComponente from './components/PrimeiroComponente.jsx'
import TemplateExpressions from './components/TemplateExpressions.jsx'

//importando o componente Criando

import Criando from './aula-componentes/criando-componentes/src/components/Criando.jsx'

function App() {
  return (
    <div className="App">
     <h1>
       Aqui temos o componente principal
     </h1>
     <PrimeiroComponente/>
     <TemplateExpressions />
    {/* lembrando sempre de colocar todo conteudo dentro da tag root do retorno!! 
    nesse caso é a div com className='App'

    usando o componente importado */}
    <Criando />

    </div>
  )
}

export default App


//é bem simples!

//veja o resultado