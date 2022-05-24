import React, {useContext} from 'react'
import {CounterContext} from '../context/CounterContext'

const Home = () => {

  //useContext desestrutura o CounterContextProvider
  const {data, setData} = useContext(CounterContext)

  return(
    <div>
      <h1>
        home
      </h1>
      <p>
        Consumindo aqui o dado do contexto : {data}
      </p>
      <button
        onClick={() => setData(data + 1)}
      >
        Altera
      </button>
    </div>
  )
}

export default Home