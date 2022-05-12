import React, {useState} from 'react'

const CssDinamico = () => {


    const [estilo, setEstilo] = useState(true)



  return (
    <div>
        <h1>
            Aqui vamos usar um estilo de forma 'inline' e dinâmica <br />
            OBS === o uso do if ternario é identico ao uso padrao que temos dele, a diferença é que ele é feito dentro do atributo style da tag
        </h1>
        <div
            style={ estilo == true ? ({backgroundColor:'red'}) : ({backgroundColor:'blue'})}
            //nesse caso se a variavel (estilo) for igual a true o background vai ser vermelho, agora se estilo for falso, o background sera azul
        >
            Conteudo alterado!
        </div>
    </div>
  )
}

export default CssDinamico