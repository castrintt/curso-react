//Criando componentes

// na maioria dos projetos os componentes ficam em uma pasta chamada components ( QUE DEVEMOS CRIAR )
//# OBS -->> é bom manter uma padronização nos projetos, usando nomenclaturas de pastas ja pre definidas

// geralmente são nomeados com camel case: ---> FirstComponent.js (inclusive a primeira letra)

// no arquivo criamos uma função, que contem o condigo deste componente ( a logica e o template )

//E tambem precisamos exportar esta função, para reutiliza-lo (geralmente usando export default nome_funcao)
// Lembrando que a base das funções é 

                            // function NomeApp(){
                            //     return (

                            //         //codigo html aqui
                            //     )
                            // }

                            // export default NomeApp


//a nomenclatura para criar um componente é bem simples

//logo depois de importar o componente criado, basta criar uma tag com o nome do componente --> 
//sintaxe para importação --> import NomeComponente from './ diretorio onde se encontra'

// ex:

//temos o componente ---> Apresentacao.jsx

// criamos o componente usando a tag(lembrando depois de importa-lo) ---> <Apresentacao />

// então 1 - nós criamos a pasta components - criamos um componente (exportando ele) 2 - importamos ele dentro do componente principal e logo depois o colocamos dentro da tag <NomeComponente /> para visualizar ele no localhost



//PARA NOS ATENTARMOS A PADROES DE PROJETO PARA CRIAÇÃO DE UM COMPONENTE A SINTAXE É UM POUCO DIFENTE

//VEjA


const Componente = () => { //declaramos uma constante com o nome do componente
    //essa variavel vai receber uma arrow function , que por si retorna o componente

    return (
        <div className="componente">
            {/* conteudo */}
        </div>
    )
}

// lembrando que o comando rafce da extensão do vscode para react que instalamos ja gera essa base com o comando 'rafce'


//essa é a base criado por ela

import React from 'react'

const PrimeiroComponente = () => {
  return (
    <div>PrimeiroComponente</div>
  )
}

export default PrimeiroComponente