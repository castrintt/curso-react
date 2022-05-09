import React from 'react'

const CarDetails = ({cor, marca, km, estado}) => {
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
        <h2>
        {estado ? <p>Carro novo</p> : <p>Carro usado</p>}
        </h2>
    </div>
  )
}

export default CarDetails