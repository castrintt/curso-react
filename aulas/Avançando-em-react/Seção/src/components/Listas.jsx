import React from 'react'

const Listas = () => {

    const [afazeres] = React.useState(['Dormir','Acordar','Estudar','Trabalhar','Estudar mais!!'])

    const [numeros] = React.useState([1,2,3,4,5,6,7,8,9,10])
    
    return (

        <div>
            <ul>
                {afazeres.map((values) => (
                    <li>
                        {values}
                    </li>
                ))}
            </ul>
            <br />
            <ul>
                {numeros.map((values) => (
                    <li>
                        {values}
                    </li>
                ))}
            </ul>
        </div>
    )

}