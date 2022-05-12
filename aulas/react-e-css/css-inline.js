//css inline é uma forma de aplicar css especificamente dentro de uma tag

// o inline style do react é igual o do css

// por meio do atributo style conseguimos aplicar regras diretamente em um elemento

//devemos optar por outras maneiras de CSS, o inline pode dificultar o entendimento e manutenção do codigo

//veja um exemplo

import React, {useState} from 'react'

const ComponenteFilho = () => {

    return(
        // dentro do atributo style vamos colocar em forma de objeto (chave:valor) as definicios do css (propriedade:valor)
        <div
        // dessa forma criamos um css inline
            style={{
                backgroundColor:'red',
                color:'blue',
                textAlign:'center'
            }}
        >
            <h1>
                Aqui temos um paragrafo
            </h1>
        </div>
    )
}

export default ComponenteFilho


//para algumas funções especificas talvez o css inline seja uma opção viavel, porem em casos onde a estilização ultrapassa 3 linhas pra mais, começa a ficar confuso, a ideia de separar o codigo em componentes é justamente para manter o codigo organizado e facilitar a manutenção, devemos sempre optar por fazer o mesmo com arquivos css!



//                  CSS INLINE DINÂMICO

// o css dinamico inline aplica estilo baseado em uma condicional

// usamos o if ternario para definir

// dependendo da condição podemos mudar que regras de estilo um elemento recebe


//ex

import React, {useState} from 'react'

const CssDinamico = () => {


    const [estilo, setEstilo] = useState(true)

//lembrando sempre de colocar o css inline dinamico (usando operador ternario) entre parenteses! 

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