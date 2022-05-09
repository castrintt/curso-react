import React from 'react'

//passando props usando conceito de destructuring !
const DesestruturandoProps = ({name,age}) => {
  return (
    <div>
        <h1>
            Nome: {name}
        </h1>
        <h1>
            Idade: {age}
        </h1>
    </div>
  )
}

export default DesestruturandoProps