import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch.jsx'

const Product = () => {

    const { id } = useParams()
    // esse id que estamos usando para desestruturar o objeto que o useParams nos retorna foi setado dentro de App no Link para produtos
    //segue o link abaixo
    //<Link to="products/:id"> // aqui passamos :id e o useParams recebeu como {id}
    //     Produtos
    // </Link>


    //CARREGAMENTO DE DADO INDIVUAL usando nosso hook criado, useFetch

    const url = 'http://localhost:3000/products/' + id

    const { data, loading, error } = useFetch(url)

    return (
        <>
            <p>
                ID do produto: {id}
            </p>
            {error && <p>Ocorreu um erro</p>}
            {loading && <p>Carregando...</p>}
            <ul>
                <li>
                    <h1>
                        Produto: {data && data.name}
                    </h1>
                    <p>
                        Preço: R$ {data && data.price}
                    </p>
                </li>
            </ul>
        </>
    )
}

export default Product