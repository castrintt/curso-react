// Previous state

//Previous state é um recurso que nos permite pegar o dado em seu valor original dentro de um set de dado

// isso é muito utilizado para modificar listas, pois temos o valor antigo e transformamos em um valor novo

// o primeiro argumento de um set sempre sera o previous state

//Vamos deletar um dos usuarios da seguinte lista criada, usando previous state



import React from 'react'

const App = () => {

    const [user, setUser] = React.useState([
        {
            id:1,
            name:'igor'
        },
        {
            id:2,
            name:'maria'
        },
        {
            id:3,
            name:'matheus'
        },
        {
            id:4,
            name:'isabela'
        },
        
    ])

    const deleteRandom = () => {

        const randomNumero = Math.floor(Math.random() * 4)


        setUser((prevUser) => {
            return prevUser.filter((value) => user.id !== randomNumero)
        })

    }

    return(

        <div>
            <ul>
                {user.map((values) => (

                    <li key={values.id}>
                        {values.name}
                    </li>
                ))}
            </ul>
            <button
                onClick={deleteRandom}
            >
                    Delete Random
            </button>
        </div>
    )
}


//explicação

import React from 'react'

const Listas = () => {


    const [dados, setDados] = React.useState([
        {
            id:1,
            nome:'igor'
        },
        {
            id:2,
            nome:'maria'
        },
        {
            id:3,
            nome:'matheus'
        }
    ])

    const deleteUser = () => {
        //pegando um nuemro aleatorio para deletar!
        const randomNumber = Math.floor(Math.random() * 4)// 4 pois o numero de usuarios da lista é 3 porem vamos usar os indices! dessa forma o numero 0 é contado

        //vamos usar a função setNomeDaVariavel! passando como parametro o prevNomeDaVariavel para resgatar o valor previo!
        setDados((prevDados) => {
            //agora vamos retornar por meio de um filter os dados que são diferentes do numero retirado no randomNumber
            return dados.filter((values) => {
                //retornando os valores diferentes do numero aleatorio!
                return values.id !== randomNumber
            })
        })

    }
    
    return (

        <div>
            <ul>
                    {dados.map((values) => (
                        <li key={values.id}>
                            {values.nome}
                            {/* dessa forma mostramos todos os nomes dos objetos contidos no array dados */}
                        </li>
                    ))}
            </ul>
                {/* vamos criar um botao para retirar aleatoriamente um dos usuarios dentro da lista dados, usando como parametro a chave id! */}
                {/* para isso vamos criar um botao que resolve uma função que deleta o usuario */}
                <button 
                    onClick={deleteUser}
                >
                        Deletar 
                </button>
        </div>
    )

}

export default Listas

//prevUser é sempre o valor atual, porem depois da execução da função ele passa a ser o valor anterior!