import React from 'react'
import '../styles/Game.css'

const Game = ({verify}) => {
  return (
    <div>
       <h1>
           Game
       </h1>
        <button
            onClick={verify}
        >
            Finalizar Jogo
        </button>
    </div>
  )
}

export default Game