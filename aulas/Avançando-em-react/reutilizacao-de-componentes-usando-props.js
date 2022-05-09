// reutilização de componentes usando props!

// Com o uso de props a reutilização de componentes faz total sentido

//imagine que estamos passando via props um objeto ou um lista com muitos dados via props para um componente

// basta simplismente reutilizar esse componente em outros lugares e pronto, não precisa refazer o processo varias e varias vezes

//isso torna o codigo padronizado e de facil entendimento, fora que a manutenção fica muito mais simples tbm

// pense que temos um componente pai chamado de App, e um componente filho chamado de CarDetails 

//em App vamos passar varios componentes CarDetails com props diferentes veja só

//componente pai (App)

import React, {useState} from 'react'
import CarDetails from './components/CarDetails'

function App() {


  return (
    <div className="App">
        {/* reaproveitando componentes usando props!!! */}
        <CarDetails marca='fiat' km={12939} cor='vermelho'/>
        <CarDetails marca='Volks' km={112} cor='preto'/>
        <CarDetails marca='fiat' km={0} cor='azul'/>
        <CarDetails marca='BMW' km={0} cor='branca'/>
         dessa forma aproveitamos o mesmo componente passando informações diferentes para ele!!

    </div>
  )
}

export default App


//acessando as props no componente filho (CarDetails)


import React from 'react'

const CarDetails = ({cor, marca, km}) => {
  return (
    <div>
        <h1>
            Detalhes do carro
        </h1>
        <p>
            marca: {marca} <br />
            cor: {cor} <br />
            km: {km}
        </p>
    </div>
  )
}

export default CarDetails

// dessa forma toda vez que chamarmos o componente filho em um import, basta alterar na props qual dado queremos receber , não precisamos escrever um componente para cada detalhes do carro por exemplo!