//components
import StartScreen from './components/StartScreen'
import Game from './components/Game.jsx'
import End from './components/End.jsx'

//css
import './styles/App.css'

//React
import { useCallback, useState, useEffect } from 'react'

// data
import {wordsList} from './data/words.js'

function App() {

  const stages = [
    {
      id:1,
      name:'start'
    },
    {
      id:2,
      name:'game'
    },
    {
      id:3,
      name:'end'
    }
  ]

  const [gameStage, setGameStage] = useState(stages[0].name)

  const [words, setWords] = useState(wordsList)

  const handlePickWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }


  // start the secret word game
  const handleStartGame = () => {
    //pick word and pick category
    const {word, category} = handlePickWordAndCategory()

    // create an array of letters
    let wordLetters = word.split('')

    wordLetters = wordLetters.map((values) => {
      return values.toLowerCase()
    })
    console.log(wordLetters)

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setPickedLetters(wordLetters)


    setGameStage(stages[1].name)
  }

  // process the letter input

  const handleVerifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // restart the game

  const handleRestartTheGame = () => {
    setGameStage(stages[0].name)
  }

  const [pickedWord , setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [pickedLetters, setPickedLetters] = useState([])


  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen start={handleStartGame}/>} 
      {gameStage === 'game' && <Game verify={handleVerifyLetter}/>} 
      {gameStage === 'end' && <End retry={handleRestartTheGame}/>} 
    </div>
  )
}

export default App
