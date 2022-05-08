import React from 'react'

const Renderizacao = () => {

    function handleRender(value) {
        if (value == true) {
            return (
                <div>
                    <h1>Componente renderizado!!!</h1>
                </div>
            )
        } else {
            return (

                <div>
                    <h1>
                        Componente antes da renderização!
                    </h1>
                </div>
            )
        }
    }

    return (
        <div>
            {handleRender()}
        </div>
    )
}

export default Renderizacao