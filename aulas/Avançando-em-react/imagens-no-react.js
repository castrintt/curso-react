//Usando imagens no React

// para usar imagens devemos importar o arquivo da imagem e usar ele dinamicamente dentro do jsx usando o template expression {}

//ex pense que dentro da pasta src, temos 1 pasta chamada assets e queremos usar uma das imagens que esta nesse arquivo dentro de App.jsx  

// Dentro de App.jsx

import react from 'react'

const App = () => {


    return (
        <div className='App'>
            <img src="" alt="" />
            {/* vamos colocar a imagem dentro de src na tag img */}
        </div>
    )
}

// 1 ) vamos fazer a importação do arquivo que esta neste caminho --.> ./assets/imagem.png

import react from 'react'
//importando
import imagem from './assets/imagem.png'


// 2 ) Vamos usar esse import dentro do react com template expressions agora

const App = () => {


    return (
        <div className='App'>
            <img src={imagem} alt="" />
            {/* Usando dinamicamente dentro do React!!
                usando template expressions
            */}
        </div>
    )
}

//lembrando que podemos fazer estilos tanto por uim arquivo css e importa-lo para o componente que sera usado, quando criar um estilo in-line

// para fazer isso adicionamos o template expressions e abrimos um objeto

// logo ficaria assim {{ estilo aqui }}

//ex

import react from 'react'

const App = () => {

    return(

        <div style={{
            width:'400px',
            height:'400px',
            backgroundColor:'red',

        }}>
        </div>
    )
}

export default App

// aqui criamos um bloco vermelho de 400 pix de largura e altura usando css inline

