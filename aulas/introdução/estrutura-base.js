// estrutura base

// há algumas pastas e arquivos chave para o desenvolvimento em React

// 1 ) node_modules --> onde as dependencias do projeto ficam

// 2) public --> Assets estaticos e HTML de inicialização (imgs/ videos e o html base)

// 3) src -->  onde vamos programar as nossas apps

// 4) src/index.js ou src/main.js(caso esteja usando o vite para instalar o react) --> arquivo de inicialização do React

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


// 5) src/App.js --> componente principal da aplicação

function App() {

    return (
      <div className="App">
        <h1>Hello world React!</h1>
      </div>
    )
  
  }
  
  export default App
  


//fazendo uma comparação com a estrutura do vue, é basicamente a mesma coisa

// o arquivo index.js seria o arquivo App.vue, (nosso componente principal)

//public é a mesma coisa --> onde estão contidos os nossos arquivos estaticos e o html

//dentro de src temos o main.js que no vue faz a mesma coisa, é o arquivo onde está contido a importação e inicialização do react/ vue