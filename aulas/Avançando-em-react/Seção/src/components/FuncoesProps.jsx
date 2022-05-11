import React, {useState} from 'react'

const FuncoesProps = ({func}) => {
  
  const [data, setData] = useState([
    {
      id:1,
      nome:'igor'
    },
    {
      id:2,
      nome:'ribas'
    }
  ])

  return (
    <div>
      <button 
        onClick={func}
      >
        Clique aqui para mostrar a mensagem do console!

      </button>

      {/* aqui vamos simplismente fazer um exercicio de loop! */}

      <ul>
        {data.map((values) => (
          <li key={values.id}>
            {values.nome}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FuncoesProps