import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Info = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/products/${id}`

    const {data, loading, error} = useFetch(url)

  return (
    <div>
        {error && <p>Algum erro aconteceu....</p>}
        {loading === true ? <p>Carregando dados....</p> :
            <div>
                <h1>
                    Produto: {data && data.name}
                </h1>
                <p>
                    Status: {data && data.info}
                </p>
            </div>
            
        }
    </div>
  )
}

export default Info