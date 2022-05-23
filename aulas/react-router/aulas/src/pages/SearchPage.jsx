import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const SearchPage = () => {

    //resgatando os valores definidos na pesquisa (onde usamos o useNavigate)
    const [searchParams] = useSearchParams()

    //definindo a nova url
    const url = `http://localhost:3000/products?${searchParams}`

    //consumindo a API
    const { data:items, loading, error } = useFetch(url)


    return (
        <div>
            <h1>
                pagina de search
            </h1>
            <ul>
                {items && items.map((values) => (
                    <li key={values.id}>
                        <h1>
                            {values.name} -- {values.price}
                        </h1>
                        <Link to={`/products/${values.id}`}>
                            Ver detalhes
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchPage