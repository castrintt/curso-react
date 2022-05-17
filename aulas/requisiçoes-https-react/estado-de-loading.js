// Estado de loading

// Quando fizermos requisições para APIs é normal que haja um intervalo de loading entre a requisição e o recebimento da resposta

// podemos fazer isso no nosso hook tbm

// indentificar quando começa e termina este estado

// dentro da função que faz o get (ou seja, que recupera as informações da requisição) nós vamos colocar a condição

// vamos criar um state que de inicio recebe false
const [loading, setLoading] = useState(false)

//logo depois disso vamos dentro da função que faz o fetch do GET e no inicio dela vamos setar o setLoading(responsavel por alterar o estado de uma constante) para true e no final (depois de receber a resposta da requisição) vamos setar ele para false de novo

useEffect(() => {
    const fetchData = async () => {
        try {
            //inicio
            setLoading(true)
            const res = await fetch(url)

            const json = await res.json()

            setData(json)
            //fim da requisição
            setLoading(false)

        } catch (err) {
            console.log(`o erro é ${err}`)
        }
    }
    
    fetchData()
}, [url,])

//com isso conseguimos manipular por condicional oque vamos ver na tela, quando o loading estiver como true, vai nos mostrar por exemplo um paragrafo escrito 'carregando dados' e caso ele esteja false o componente vai renderizar normalmente

//ex

import { useEffect, useState } from 'react'
//custom hook
import { useFetch } from './hooks/useFetch.jsx'

//css
import '../styles/App.css'

function App() {
  //states
  const [products, setProducts] = useState([])

  const url = 'http://localhost:3000/products'

  const { loading } = useFetch(url)
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/*loading */}
      {/* caso loading for true, carrega uma mensagem 'Carregando dados' caso for false, renderiza a lista normalmente */}
      {loading === true ? (<p>Carregando dados</p>) : (<ul>
        {data && data.map((values) => (
          <li key={values.id}>
            Produto:{values.name} -<span> Preço: R$ {values.price}</span>
          </li>
        ))}
      </ul>)}

      {/* //formulario para envio via POST */}
      <div className="add-product">
        <form
          onSubmit={handleSubmit}
        >
          <label>
            <span>
              Adicionar Produto
            </span>
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span>
              Adicionar Preço
            </span>
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar produto" />
        </form>
      </div>
    </div>
  )
}

export default App


