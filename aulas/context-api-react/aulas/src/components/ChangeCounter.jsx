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