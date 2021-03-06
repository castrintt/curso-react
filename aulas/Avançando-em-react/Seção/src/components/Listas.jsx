import React from 'react'

const Listas = () => {

    const [afazeres] = React.useState(['Dormir','Acordar','Estudar','Trabalhar','Estudar mais!!'])

    const [numeros] = React.useState([1,2,3,4,5,6,7,8,9,10])

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
            console.log(prevDados)
            return dados.filter((values) => {
                //retornando os valores diferentes do numero aleatorio!
                return values.id !== randomNumber
            })
        })

    }
    
    return (

        <div>
            <ul>
                {afazeres.map((values,index) => (
                    <li key={index}>
                        {values}
                    </li>
                ))}
            </ul>
            <br />
            <ul>
                {numeros.map((values, index) => (
                    <li key={index}>
                        {values}
                    </li>
                ))}
            </ul>

                    {/* renderizando dados de um array de objetos */}

            <br />
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