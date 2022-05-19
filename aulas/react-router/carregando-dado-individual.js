// Carregando dado individual

// Graças ao passo dado na aula passada (usando o useParams) o carregamento individual de um produto será facil!

// vamos utilizar o id recebido para formar a nova URL

// e depois podemos utilizar o hook useFetch para trazer o item 

// por fim faremos a validação e impressão do msm no JSX

// componente produto (onde vamos visualizar o produto)

import {useParams} from 'react'

import {useFetch} from './hooks/useFetch.jsx'

const Produto = () => {

    //id recebido pelo useParams --> definido no Route no componente App
    const { id } = useParams()

    //acessando dado da api!
    const url = `http://localhost:3000/products/${id}`

    //usando o hook useFetch (custom hook)
    const { data, loading, error } = useFetch(url)


    return(
        <div>
            <h1>
                ID do produto: {id}
            </h1>
            {/* para acessar os dados agora é simples! ja que definimos os parametros a receber  */}
            <ul>
                <li>
                    <h1>
                        {/* condicional para --> se data for valido(true) ou seja , existir dados nele podemos carregar a o data.name */}
                        {data && data.name}
                    </h1>
                    <p>
                        {data && data.price}
                    </p>
                </li>
            </ul>

        </div>
    )
}

export default Produto