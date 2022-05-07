import React from 'react'
import '../styles/principal.css'
import Criando from './Criando.jsx'

const PrimeiroComponente = () => {
  return (
    <div className='componente'>
        <h1>
            Aqui temos um componente novo!
        </h1>

        <Criando />
    </div>
  )
}

export default PrimeiroComponente


