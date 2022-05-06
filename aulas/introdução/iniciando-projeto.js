// introdução a estrutura de um projeto react

//a pagina principal, que é onde vamos trabalhar no dia a dia é a src (source)

//dentro da pasta src , temos o arquivo App.js ou App.jsx, é nele que temos a estrutura base do nosso projeto

// segue abaixo o conteudo da pasta

import { useState } from 'react'

function App() {

  return (
    <div className="App">
   
    </div>
  )
}

export default App


// note que para criar uma tag html para que seja visualizada dentro do localhost
//basta criar a estrutura base de uma função retornando o html

function App() { // criando a função
    return ( // retornando o html
        <div className='Minha-primeira-div'>
            {/* conteudo  */}
        </div>
    )
}



//dizendo o nosso primeiro hello world

import { useState } from 'react'

function App() {

  return (
    <div className="App">
      <h1>Hello world React</h1>
    </div>
  )
}

export default App

