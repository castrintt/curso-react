// Controlled inputs

// Controlled inputs é um recurso que nos permite mais flexibilidade nos forms de React

// Precisamos apenas igualar o valor ao state

// Um uso muito comum --> Formularios de edição, que os dados vem do back-end, conseguiremos preencher o input mais facilmente

// vamos usar o atributo value das tags de input igualando seu valor a um state de uma variavel

//ex 

//componente pai

import React, {useState} from 'react'
import ComponenteFilho from './components/ComponenteFilho.jsx'

//passamos para o ComponenteFilho props de forma direta, ou seja, não criamos um estado para enviar dados para o componente, ja colocamos os dados direto no envio das props

const App = () => {

    return(
        <div>
            <ComponenteFilho 
            user={{
                name:'josias',
                email:'josias@gmail.com'
            }} 
            />
        </div>
    )
}

export default App

// dentro do componente filho

import React,{useState} from 'react'


const ComponenteFilho = ({user}) => {

    //dessa forma passamos para o valor default do input o valor recebido pela props user
    return(
        <>
            <form>
                <label>
                    <span>
                        Nome: 
                    </span>
                    <input type="text" name="texto" value={user.name} />
                </label>

                <label>
                    <span>
                        Email:
                    </span>
                    <input type="email" name="email" value={user.email} />
                </label>
            </form>
        </>
    )
}

export default ComponenteFilho


// podemos fazer dessa forma tbm
// componente filho

import React, {useState} from 'react'

//acessando a props passada dentro de App
const ControlledInputs = ({user}) => {
    //nesse caso o valo inicial do input sera alterado quando o valor das constantes name e email alterarem tbm! essa é a forma ideal de controlar o input
    const [name, setName] = useState( user ? user.name : '')
    const [email, setEmail] = useState( user ? user.email : '')

    return(
        <div>
            <form>
                <label>
                    <span>
                        Nome: 
                    </span>
                    <input type="text" name="text" value={name} />
                </label>
                <label>
                    <span>
                        Email:    
                    </span>
                    {/* dessa forma o input ja vem pre-definido */}
                    <input type="email" name="email" value={email} />
                </label>
            </form>
        </div>
    )
}

export default ControlledInputs