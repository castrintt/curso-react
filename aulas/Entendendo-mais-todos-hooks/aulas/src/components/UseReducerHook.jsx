import {useReducer} from 'react'

const UseReducerHook = () => {

  const initialState = {
    number: 1,
    num:1
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'primeiro':
        return {
          number: state.number + 1,
          num: state.num
        }
      case 'segundo':
        return {
          number: state.number,
          num: state.num + 2 ,
        }
      default:
        return
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>useReducer</h1>
      <p>
        1 - {state.number}
      </p>
      <p>
        2 - {state.num}
      </p>
      <button
        onClick={() => dispatch({type:'primeiro'})}
      >
        incre
      </button>
      <button
        onClick={() => dispatch({type:'segundo'})}
      >
        decre
      </button>
    </div>
  )
}

export default UseReducerHook