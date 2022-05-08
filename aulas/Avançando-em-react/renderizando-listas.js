// Renderizando listas

//uma outra ação bem comim é rendeerizar listas de dados no template

//fazemos isso com os dados com tipo de array

// utilizando o metodo map para nos auxiliar

// alem dos dados podemos inserir JSX em cada iteração!!



//ex de uso do map em javascript puro

let lista = [1,2,3,4,5,6,7]

lista.map((values, indice) => {
    console.log(values,indice)
})

//retorna na ordem o valor, e o indice onde se encontra!
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4
// 6 5
// 7 6


//usando map em react  

// usaremos o useState!!

//map usado dentro do template expressions é uma arrow function, que usa parenteses e não colchetes!

//LEMBRANDO QUE SEMPRE VAMOS TRABALHAR COM HOOKS E NÃO VARIAVEIS

import React from 'react'

const App = () => {

    //criando uma lista usando useState
    const [numeros] = React.useState([1,2,3,4,5,6,7,8,9,10])

    return(

        <div className='App'>
            {/* aqui vamos criar uma unorder list e usar os dados da lista acima para serem renderizados no navegador */}
            <ul>
                {
                    //usando função map para iterar todos os items do array numeros
                    numeros.map((values) => (
                        //criando uma arrow function (porem no react para o map não abrimos e fechamos o map com colchetes, usamos os parenteses)
                        <li>
                            {/* usando os valores iterados do array numeros para renderizar na tela em forma de lista(um a um) */}
                            {values}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}