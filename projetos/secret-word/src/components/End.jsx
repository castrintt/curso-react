import React from 'react'
import '../styles/End.css'

const End = ({ retry }) => {
    return (
        <div>
            <h1
                style={
                    {
                        color: 'red',

                    }
                }
            >
                Game Over
            </h1>
            <button
                onClick={retry}
            >
                Resetar Jogo
                
            </button>
        </div>
    )
}

export default End