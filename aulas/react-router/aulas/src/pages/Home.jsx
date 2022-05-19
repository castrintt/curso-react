import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.jsx'

const Home = () => {

  const url = 'http://localhost:3000/products'

  const { data , loading, error} = useFetch(url)

  return (
    <div>
        <h1>
            Componente Home/Produtos
        </h1>
        {error && <p>{error}</p>}
        
        {data && 
          <ul>
            {data.map((values) => (
              <li key={values.id}>
                  <h1>Produto: {values.name}</h1>
                  <p>Preço: R$ {values.price}</p>
                  <Link to={`products/${values.id}`} >
                    Detalhes do produto
                  </Link>
              </li>
              
            ))}
          </ul>
        }
    </div>
  )
}

export default Home