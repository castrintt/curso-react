// State lift --->>> elevação de state

//Elevação de state ou state lift é quando um valor é elevado do componente filho para o componente pai (ocorre praticamente o inverso de um props --> que envia dados do pai para filho)

// Geralmente temos um componente que USA o state e um que ALTERA

// então precisamos passar a alteração para o componente pai, e este passsa para o componente que usa o state

//ex

// temos no componente pai uma constante chamada message, com estado inicial de 'ola seja bem vindo', vamos criar uma função que altera o valor tbm

// em um componente filho que vamos chamar de IrmaoVelho vamos receber o valor da constante

// em outro componente filho chamado IrmaoNovo vamos receber a função que altera o valor da constante que foi enviada para o IrmaoVelho!


//VAMOS LA

//componente pai

import React , {useState} from 'react'
import IrmaoNovo from './components/IrmaoNovo'
import IrmaoVelho from './components/IrmaoVelho'

const Pai = () => {
    //esse vai ser o estado inicial da constante message ( que sera enviado para o componente IrmaoVelho  via props )
    const [message, setMessage] = useState('Mensagem inicial')

    //essa vai ser a função que altera o valor da constante message (que vai para o componente IrmaoNovo) --> ela recebe como parametro a mensagem que será sobreescrita no lugar da string inicial de message
    const handleMessage = (msg){
        setMessage(msg)
    }

    return(
        <div>
            <IrmaoVelho msg={message} />
            <IrmaoNovo alterarMensagem={handleMessage}/>
        </div>
    )
}

export default Pai

// Agora vamos ver como o IrmaoVelho esta

import React, {useState} from 'react'

//vamos receber via props (msg) o valor da constante message
const IrmaoVelho = ({msg}) => {

    return(
        <div>
            Mensagem inicial = {msg}
        </div>
    )
}

export default IrmaoVelho

//agora vamos ver como esta o IrmaoNovo onde esta contido a função que muda o valor da constante message (que esta no IrmaoVelho)

import React, {useState} from 'react'

//recebendo via props a função alterarMensagem
const IrmaoNovo = ({alterarMensagem}) => {
    //vamos passar uma lista de mensagems para que possamos acessar uma delas aleatoriamente pelo indice!

    const [mensagensAleatorias, setMensagensAleatorias] = useState(
        ['Bom dia!','Boa tarde!', 'Boa noite!']
    )

    return(
        <>
            {/* dessa forma o bota vai pegar um numero aleatorio entre 0 e 2 para acessar os indices de 0, 1, 2 da constante mensagemAleatoria */}
            <button
                onClick={() => alterarMensagem(mensagensAleatorias[Math.floor(Math.random() * 2)])}
            >
                Clique aqui para alterar o valor da mensagem!
            </button>
        
        </>
    )
}

export default IrmaoNovo


// e pronto, agora quando clicarmos no botao que esta no componente IrmaoNovo, ele vai alterar o valor da constante que esta no componente IrmaoVelho

//e tudo isso foi feito pegando dados e funções do componente pai!