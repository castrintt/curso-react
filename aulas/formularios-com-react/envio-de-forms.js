// Envio de forms

//para enviar um form vamos utilizar o evento onSubmit

//ele chamara uma função, e nesta devemos lembrar de parar a submissao com o preventDefault! 
//acessando o event no argumento --> (e) =>{
//     e.preventDefault()
// }

//nesta etapa podemos realizar validações, envio de form para o servidor, reset de form e outras ações

// Lembrando que o onSubmit é usado na tag <form></form>

//ex

//podemos criar uma função para barrar o evento default do submit, ou podemos inserir direto no forms a função

// 1 ) criando uma função

import React, {useState} from 'react'

const Componente = () => {

    //iniciando a constante para pegar o valor do usuario como uma string vazia
    const [dado, setDado] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(

        <div>
            <form
                //dentro de forms vamos acessar a função handleSubmit por meio do evento de submit
                onSubmit={handleSubmit}
            >
            <div>
                <label>
                    <span>Digite seu email</span>
                    <input
                     type="email"
                     name="email"
                     placeholder='Digite seu email'
                     onChange={(e) => setDado(e.target.value)}
                     //dessa forma temos acesso ao valor que o usuario escrever dentro do input
                     />
                </label>
            </div>
            <input type="submit"
            value="Enviar Formulario"    
            />
            </form>
        </div>
    )
}

export default Componente

// 2 ) agora vamos ver como fariamos para acessar a função direto no evento de onSubmit

import React, {useState} from 'react'

const Componente = () => {

    //iniciando a constante para pegar o valor do usuario como uma string vazia
    const [dado, setDado] = useState('')
    return(

        <div>
            <form
            //simplismente fariamos isso!
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
            <div>
                <label>
                    <span>Digite seu email</span>
                    <input
                     type="email"
                     name="email"
                     placeholder='Digite seu email'
                     onChange={(e) => setDado(e.target.value)}
                     //dessa forma temos acesso ao valor que o usuario escrever dentro do input
                     />
                </label>
            </div>
            <input type="submit"
            value="Enviar Formulario"    
            />
            </form>
        </div>
    )
}

export default Componente


// a diferença entre os 2 são minimas e o resultado é o mesmo

// Lembrando que dentro do submit temos acesso a todos os dados dele

// veja por exemplo no caso abaixo

import React, {useState} from 'react'

const EnvioDeForms = () => {

    const [dado, setDado] = useState('')



  return (
    <div>
        <form 
             onSubmit={(e) => {
                e.preventDefault()
                // aqui podemos pegar o valor da constante dado!
                console.log(dado)
            }}
        >
            <div>
                <label>
                    <span>Digite seu email</span>
                    <input
                     type="email"
                     name="email"
                     placeholder='Digite seu email'
                     onChange={(e) => setDado(e.target.value)}
                     //dessa forma temos acesso ao valor que o usuario escrever dentro do input
                     />
                </label>
            </div>
            <input type="submit"
            value="Enviar Formulario"    
            />
        </form>
    </div>
  )
}

export default EnvioDeForms