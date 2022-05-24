import React, {useContext} from 'react'
import {CounterContext} from '../context/CounterContext.jsx'
const Contact = () => {

  const { data } = useContext(CounterContext)

  return (
    <div>
      <h1>
        Contact
      </h1>
      <p>
        Contexto : {data}
      </p>
    </div>

  )
}

export default Contact