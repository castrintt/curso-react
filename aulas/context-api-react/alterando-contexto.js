// Alterando o contexto

// Para alterar o valor do contexto precisamos criar um componente que utilize a função da mudança de contexto

//esta função ocorrerá no Context e poderá ser consumida por todos os componentes que recebem o contexto

// e assim finalizamos o ciclo da context Api

// O CICLO --> cria context, consome usando provider, alterar

//criamos um componente para alterar o estado do conteudo do context -> que foi definido dentro de provider

import React from 'react'

//alterando context
import { useContext } from 'react'

import { CounterContext } from '../context/CounterContext'

const ChangeCounter = () => {

    const {data, setData} = useContext(CounterContext)

  return (
    <div>
        <h1>
            Change Counter
        </h1>
        <h2>
            {data}
        </h2>
        <button
            onClick={() => setData(data + 1)}
        >
            Alterar valor do contador
        </button>
    </div>
  )
}

export default ChangeCounter

// dessa forma em qualquer pagina que usarmos context ele vai ser alterado!