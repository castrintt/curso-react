import { useCounterContext } from "../hooks/useCounterContext"



const Home = () => {

  const {counter} = useCounterContext()

  return(
    <div>
      <h1>
        home
      </h1>
      <p>
        Consumindo aqui o dado do contexto : {counter}
      </p>
      <button
        onClick={() => setData(data + 1)}
      >
        Altera
      </button>
    </div>
  )
}

export default Home