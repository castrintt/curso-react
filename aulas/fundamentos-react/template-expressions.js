// Template Expressions

// é um recurso que nos permite executar JS no JSX e tambem interpolar variaveis

// isso sera muito util ao longo dos seus projetos em React

// a sintaxe é : --> { algum codigo } --> dentro de chaves simples

//Tudo que está entre chaves é processado em JavaScript e nos retorna um resultado



//ex 

//pense no seguinte componente

import React from 'react'

const TemplateExpressions = () => {

    const nome = 'Tiago' // uma constante declarada recebendo uma string

    let lista = [ //uma lista de objetos recebendo strings e number
        {
            'nome':'igor',
            'idade':23
        },
        {
            'nome':'isabela',
            'idade':17
        }
    ]

  return (
    <div className='Root'>
        <h1>
            {/* acessando o valor da constante nome declarada acima */}
           Nome Gerente:  { nome } 
           
        </h1>

        <h2>
            {/* {/* acessando as chaves e valores dos objetos contidos na lista dinamicamente */} 
            Nome Funcionarios: { lista[1]['nome'] } e { lista[0]['nome'] }
            <br />
            Idade Funcionario: { lista[1]['idade'] } anos e { lista[0]['idade'] }
        </h2>
    </div>
  )
}

export default TemplateExpressions


//podemos escrever a logica logo acima do return (que nesse caso só tem a função de retornar o html)

//podemos fazer tbm com a seguinte sintaxe (dentro do objeto declarar chave e valor sem que a chave seja necessariamente seja uma string, number, boolean e etc..)

import React from 'react'

const TemplateExpressions = () => {

    const nome = 'Tiago'

    let lista = [
        {
            nome:'igor', 
            idade:23
        },
        {
            nome:'isabela',
            idade:17
        }
    ]

  return (
    <div className='Root'>
        <h1>
           Nome Gerente:  { nome }
        </h1>

        <h2>
            {/* note que a chamada do valor da chave lista fica diferente, ao inves de usar a sintaxe ['chave'] estamos usando .chave  mas isso é uma funcionalidade do javascript !!*/}
            Nome Funcionarios: { lista[1].nome } e { lista[0].nome }
            <br />
            Idade Funcionario: { lista[1].idade } anos e { lista[0].idade }
        </h2>
    </div>
  )
}

export default TemplateExpressions



//podemos declarar tbm calculos por exemplo dentro do template expression


import React from 'react'

const template_expressions = () => {
  return (
    <div> { 10 + 20 } </div>
  )
}

export default template_expressions


//todo e qualquer codigo/logica em javascript pode ser executado dentro do template expression

