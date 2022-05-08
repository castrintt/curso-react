import React from 'react'

const Listas = () => {

    const [afazeres] = React.useState(['Dormir','Acordar','Estudar','Trabalhar','Estudar mais!!'])

    const [numeros] = React.useState([1,2,3,4,5,6,7,8,9,10])

    const [dados] = React.useState([
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

        </div>
    )

}