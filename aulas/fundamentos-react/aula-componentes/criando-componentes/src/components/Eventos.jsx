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
            <div className='evento-inline'>
            <button
                onClick={() => { //criamos uma arrow function para que ao clicar no botao apareça no console uma mensagem de click!
                    console.log('Clicou')
                }}
            >
                Clique aqui também!
            </button>
            </div>
        </div>
    )
}

export default Eventos // vamos importar esse componente dentro de App para visualizar melhor



// lembrando que a estrtura base pode ser criada usando simplismente o comando

// rafce <<<---