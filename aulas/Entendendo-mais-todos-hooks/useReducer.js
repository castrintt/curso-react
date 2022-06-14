// useReducer

// o useReducer tem a mesma função que o useState, ele gerencia valores

// porem temos a possibilidade de executar uma função na hora da alteração do valor

// então temos que o useReducer recebe um valor para gerenciar e uma função para alterar este valor

//basicamente como o useState --> porem recebendo os states e a função para alterar cada um via objeto

//configuração base

import {useReducer} from 'react'

const UseReducerHook = () => {

  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  })

  return (
    <div>
      <h1>useReducer</h1>
      <p>
        {number}
      </p>
      <button
        onClick={dispatch}
      >
        Clicar
      </button>
    </div>
  )
}

export default UseReducerHook


//outro exemplo

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



// useReducer com Actions

// se o useReducer fosse utilizado como no exemplo passado, não teria tanta diferença do useState

// por isso o reducer geralmente contem operações mais complexas, utilizando a estrutura switch com actions

//esta situação foi apresentada na seção de context Api

// useReducer mais complexo

import { useReducer, useState } from "react"

const UseReducerActions = () => {

    const [taskText, setTaskText] = useState('')

    const initialTasks = [
        {
            id: 1,
            text: 'Fazer uma coisa'
        },
        {
            id: 2,
            text: 'Fazer 2 coisa'
        }
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setTaskText('')
                //pegando todos os itens do state anterior e adicionando um novo objeto ao array
                return [...state, newTask]
            case 'DELETE':
                return state.filter((task) => task.id !== action.id)
            default:
                return state
        }
    }

    const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD' })
    }

    const removeTask = (id) => {
        dispatch({ type: 'DELETE', id: id })
    }

    return (
        <div>
            <h1>useReducer com actions</h1>
            <h3>
                Tarefas
            </h3>
            {tasks.map((values) => (
                <li key={values.id} onDoubleClick={() => removeTask(tasks.id)}>
                    {values.text}
                </li>
            ))}
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Add tarefa</span>
                    <input value={taskText} type="text" onChange={(e) => setTaskText(e.target.value)} name="task" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default UseReducerActions