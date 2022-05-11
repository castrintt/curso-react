import React, {useState} from 'react'

const AlteraLiftState = ({altera}) => {

    const [mensagens, setMessages] = useState(
        ['olá','ola tudo bem?','oi']
    )


  return (
    <div>
        <button
            onClick={() => altera(mensagens[Math.floor(Math.random() * 3)])}
        >
            ALTERAR MENSAGEM
        </button>
    </div>
  )
}

export default AlteraLiftState