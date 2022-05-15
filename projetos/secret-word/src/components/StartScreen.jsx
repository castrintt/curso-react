import '../styles/StartScreen.css'

const StartScreen = ({ start }) => {
    return (
        <div
            className='start'
        >
            <h1>
                Secret Word
            </h1>
            <p>Clique no botão abaixo para começar</p>
            <button
                onClick={start}
            >Começar Jogo</button>
        </div>
    )
}

export default StartScreen