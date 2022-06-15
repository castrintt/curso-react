import {useRef, useEffect , useState} from 'react'

const UseRefHook = () => {

    //useRef --> usado para criar referencias

    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    },[])

    console.log(numberRef)
    

  return (
    <div> 
        <h1>useRef</h1>
        <p>O componente renderizou: {numberRef.current} Vezes.</p>
        <p>Counter 1: {counter} </p>
        <button
            onClick={() => setCounter(counter + 1)}
        >
            Contador A
        </button>
        <p>Counter 2: {counter} </p>
        <button
            onClick={() => setCounterB(counter + 1)}
        >
            Contador B
        </button>
    </div>
  )
}

export default UseRefHook