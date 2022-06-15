import {useState, useEffect} from 'react'

const UseEffectHook = () => {

    const [titulo, setTitulo] = useState('')

    useEffect(() => {
        console.log('estou sendo executado uma unica vez!')
    }, [])

  return (
    <div>
        <h1>
            useEffect
        </h1>
        <div>
            <h1>
                {titulo}
            </h1>
            <button
                onClick={() => setTitulo('Ola, bem vindo')}
            >
                Alterar o titulo para o useEffect ser chamado
            </button>
        </div>
    </div>
  )
}

export default UseEffectHook