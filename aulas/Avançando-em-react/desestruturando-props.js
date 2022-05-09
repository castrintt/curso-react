// Desestruturando props

// vamos usar novamente o conceito de destruturing do javascript!

// é super comum passar mais de uma props em um componente

// suponha que tenha duas props, chamadas name e age

//dentro do componente filho (onde usaremos as props) ficaria assim se fossemos usar normalmente:

import React, {useState} from 'react'

const ComponenteFilho = (props) => {

    return(
        <div>
            <h1>
                {props.name}
                {props.age}
            </h1>
        </div>
    )
}

//usando destructuring ficaria assim

import React, {useState} from 'react'

const ComponenteFilho = ({name, age}) => {

    //agora não precisamos mais acessar elas usando props.nomeDaProps
    //podemos simplismente chamar o nome da props dentro do template expressions

    return(
        <div>
            <h1>
                {name}
                {age}
            </h1>
        </div>
    )
}


//OBS --> o nome da props passado no componente pai deve ser identico ao nome usado para desestruturar no componente filho! caso contrario o react não vai entender qual props vc quer usar de fato e vai te retornar um erro 