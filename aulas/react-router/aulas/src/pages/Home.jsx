import { useFetch } from "../hooks/useFetch";
import {Link} from 'react-router-dom'


const Home = () => {

  const url = 'http://localhost:3000/products'

  const { data, loading, error} = useFetch(url)

  return(
    <div>
      <h1>
        Home
      </h1>
      <ul>
        {data && data.map((values) => (
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

export default Home