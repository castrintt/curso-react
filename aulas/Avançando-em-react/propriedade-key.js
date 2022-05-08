//propriedade key

//OBS --> MESMO SENTIDO DO USO DE KEY DENTRO DE VUE JS  AO USAR O V-FOR PARA RENDERIZAR DADOS NA TELA 

//iterar listas sem a propriedade key nos gera um warning, podemos verificar isso no console

//O react precisa de uma chave unica em cada um dos itens iterados

//isso serve para ajuda-lo na renderização do componente

// geralmente teremos um array de objetos e podemos colocar o key como alguma chave unica, como o id de algum dado por exemplo

//EM ULTIMO CASO, USAMOS O INDEX (SEGUNDO PARAMETRO DO METODO MAP)



//vamos usar como exemplo um componente com poucos dados para que então possamos usar o index (segundo argumento do map) para orientar o react

import React from 'react'

const App = () => {

    const [ nomes ] = React.useState(['igor','matheus','prado'])


    return(
        <div>
            <ul>
                {nomes.map((values,index) => (
                    <li key={index}>
                        {values}
                    </li>
                ))}
            </ul>
        </div>
    )
}

//dessa forma passamos um parametro novo para o map -> index que pega os indices dos elementos contidos na lista para orientação do react

//agora veremos um caso onde o key é aplicado para um array de objetos que é a forma mais comum de trabalharmos com dados, ja que faremos muito consumo de APIS

import {useState} from 'react'


const Componente = () => {

    //veja que agora estamos usando somente o useState, pois somente importamos o modulo useState do react!
    const [dados] = useState([
        {
            id:1231232,
            nome:'igor'
        },
        {
            id:129038,
            nome:'marcela'
        },
        {
            id:12938012,
            nome:'ribas'
        }
    ])

    return(

        <div>
            <ul>
                {dados.map((values) => (
                    //vamos usar o values.id como key, ja que cada values passa por todos os objetos contidos no array, dessa forma, values acessa um objeto e o .id acessa a propriedade id do objeto
                    <li key={values.id}>
                        {values.nome}
                    </li>
                ))}
            </ul>
        </div>
    )
}

