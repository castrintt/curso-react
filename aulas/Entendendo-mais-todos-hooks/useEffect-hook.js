// useEffect

// o useEffect é utilizado para varias ações no nosso App, junto com useState é um dos hooks mais utilizados

// podemos realizar desde alterações na DOM a requisições HTTP

// e o grande motivo é ? conseguimos controlar quantas vezes algo acontece

// a sintaxe é formada por uma função a ser executada e um array de dependencias

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