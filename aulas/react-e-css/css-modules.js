// css modules

// o CSS modules é um recurso de css scoped

// ou seja ele vai ser exclusivo do componente

// o nome do arquivo é: Componente.modules.css

//precisamos importar ele tambem dentro do componente

// dessa forma conseguimos trabalhar com um css por componente e ele não vaza para os demais componentes

// ESSA É A MELHOR FORMA DE USAR STYLES!

// Lembrando --->> o nome do arquivo deve ser:

// NomeDoComponente.module.css 

// para importar esse arquivo vamos importar da seguinte forma

import styles from './diretorio/NomeComponente.module.css'

// vamos ver na pratica

//componente pai

import React, {useState} from 'react'
import ComponenteFilho from './components/ComponenteFilho.jsx'

const App = () => {

    return(

        <div>
            <h1>
                Componente pai!
            </h1>
            <br />
            <ComponenteFilho />
        </div>
    )
}

export default App


// agora temos o componente filho (onde vamos usar o styles module)


import React, {useState} from 'react'
//criamos um arquivo modules.css com o nome de ComponenteFilho, vamos importa-lo
import styles from '../styles/ComponenteFilho.modules.css'

const ComponenteFilho = () => {

    //para usar esse arquivo basta inserir dentro das classes o nome do arquivo importado (styles) '.' (ponto) nome da classe
    //lembrando de usar template Expressions!
    return(
        <div>
            {/* .title é o nome da classe que usamos para estilizar no ComponenteFilho.modules.css */}
            <h1 
                className={styles.title}
            >
                Componente filho!
            </h1>
        </div>
    )
}

export default ComponenteFilho


// veja agora o arquivo com modules.css



// .title{
//     background-color: red;
//     color: blue;
// }



//pronto o css não vaza para nenhum outro componente!
// estamos usando o css scoped, somente esse ComponenteFilho vai conseguir usar suas regras!

// dessa forma se criarmos um titulo no componente pai e usarmos o className de title, o css não vai vazar, como nos vimos anteriormente no css dinamico usando classes e condicionais!