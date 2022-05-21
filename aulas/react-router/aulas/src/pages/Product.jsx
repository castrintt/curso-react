import React, { useEffect, useState } from 'react'

import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Product = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/products/${id}`


    //sem useFetch

    // const [data, setData] = useState([])

    // const handleRequest = async () => {

    //     const res = await fetch(url)

    //     const json = await res.json()

    //     setData(json)
    // }

    // useEffect(() => {
    //     handleRequest()
    // },[])

    //com useFetch

    const { data, loading, error } = useFetch(url)


    return (
        <>
            <Link to='/'>
                Back to Home
            </Link>

            {error && <p>Ocorreu algum erro...</p>}
            {loading == true ? <p>Carregando dados...</p> : (
                <div>
                    <h1>
                        ID do produto : {id}
                    </h1>
                    <h1>
                        Produto : {data && data.name} -- Preço : {data && data.price}
                    </h1>
                    {/* nested routes */}
                    <Link to={`/products/${id}/info`}>
                        Mais informações
                    </Link>
                </div>
            )}

        </>
    )
}

export default Product