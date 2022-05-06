// anteriormente foi mostrado como criar um componente e foi dito como importa-lo

// para ficar mais simples o entendimento foi criado uma seção para isso

//importando um componente!

// a importanção é a maneira que temos de reutilizar o componente 


// utilizamos a sintaxe : ---> import NomeQueVoceQuerDarParaOComponente from 'diretori onde se encontra o mesmo'

//ex

import Header from './components/Header.jsx'

// para colocar o componente importado em outro componente, precisamos usar uma sintaxe especial do react --> colocamos o componente importando dentro de uma tag html

// como acima importamos o componente Header usariamos ele dentro do componente assim

<Header />

// por fim finalizamos o ciclo de importação 

// 1 - import Component from './diretorio'
// 2 - use o componente <Componente />



// OBS --

//lembrando que tbm temos que importar arquivos css criados para cada componente

//ex tenho um componente chamado PrimeiroComponente.jsx e um arquivo css onde ele foi estilizado, temos que importar esse arquivo css dentro do componente para ele entender que precisa ser usado

//para importação de um arquivo css temos que definir a extensão do arquivo 

// ( por padrão eu sempre coloco as extensões então ja não faz muita diferença! )

import './diretorio_do_arquivo css.css'
