// Eventos 

// evento de click

// Os eventos para o front-end são essenciais

//em varias situações vamos precisar do click, como ao enviar formularios

//No react os eventos ja estao 'prontos', podemos utilizar onClick para ativar uma função ao clicar em um elemento

// Esta função é criada na propria função do componente ( basicamente onde é feito a logica do programa )

// As funções geralmente tem o padrao handleAlgumaCoisa

//sempre bom criar suas funções como variaveis e simplismente assimilando uma arrow function a ela

//ex

const handleMinhaFuncao = () => {
    //bloco de codigo
}


//porem nada te impede de fazer dessa forma 

function handleMinhaFuncao() {
    //bloco
}


//ex de um componente usando event (ainda sem funcionalidade, somente retornando no console o event)

import React from 'react'

const Eventos = () => {
    const handleMyEvent = (e) => {
        console.log(e)
    }

    return (
        <div>
            <div className='evento-click'>
                <button onClick={handleMyEvent}>Click Here!</button>
            </div>
        </div>
    )
}

export default Eventos // vamos importar esse componente dentro de App para visualizar melhor



// lembrando que a estrtura base pode ser criada usando simplismente o comando

// rafce <<<---




//FUNÇÃO NOS EVENTOS

//quando as funções são simples, podemos realiazr a logica no proprio evento

// isso torna nosso codigo mais 'complicado', por atrelar logica com HTML

// mas em algumas situações são aplicaveis

//ex

import React from 'react'

const EventClickInLine = () => {

    return (

        <div>
            <button
                onClick={
                    () => {
                        console.log('Clicou!')
                    }
                }
            >
                Clique aqui
            </button>
        </div>
        
    )
}

// criamos uma função inline que simplismente retorna no console clicou! quando o evento ser ativado, ou seja, quando o botao ser clicado

//OBS --> o React não te impede de criar funções maiores dentro da linha, porem não é muito indicado
//o codigo fica sujo e dificil de entender, sempre bom fazer a logica separado do template!

//veja um exemplo de uma função sendo executada dentro de um template (no caso uma função grande)


import React from 'react'


const NovaFuncao = () => {
    return (

        <div>
            <button
                onClick={
                    () => {
                        if (true){
                            console.log('Isso não deveria existir!')
                        }else if (false){
                            console.log('Olha como esta ruim de analisar esse codigo')
                        }else{
                            console.log('Imagine se existisse aqui uma logica maior!')
                        }
                    }
                }
            >
                Clique aqui!
            </button>
        </div>
    )
}

// note como ficaria se fizessmos essa função fora do HTMl

import React from 'react'

const Funcao = () => {

    function handleClick(e) {
        if (true){
            console.log('Agora sim bem melhor!')
        }else if (false){
            console.log('Note que fica até mais facil a visualização do codigo HTML, por n conter tanta logica dentro dele!')
        }else {
            console.log('Viva a organização!')
        }
    }

    return (

        <div>
            {/* lembrando que se declararmos a função invocada ex: handleClick() quando entrarmos na pagina ela executa automaticamente e não é isso que queremos! */}
            <button onClick={handleClick}> 
                Clique aqui
            </button>
        </div>
    )
}