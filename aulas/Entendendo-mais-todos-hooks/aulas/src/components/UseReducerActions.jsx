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