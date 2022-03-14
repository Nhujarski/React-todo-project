import React, { useState } from 'react'
import './styles.css'
import TodoList from '../TodoList/TodoList'

function TodoForm({ onSubmit, todo }) {
    /**
     * State
     */
    const [input, setInput] = useState('');
    const [error, setError] = useState(false)

    // console.log("todo >>>>>> ", todo)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('input >>. ', input)
        console.log("todo >>>>>> ", todo)
        if (todo.some((item) => {
            return item.text === input
        })) {
            setError(true);
            console.log('made it here!')
            console.log(error)
        } else {
            onSubmit({
                id: Math.floor(Math.random() * 1000),
                text: input,
            })
            setError(false)
        }

        setInput('')
    }

    /**
     * Render
     */
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                className='todo-input'
                type='text'
                placeholder='Add a todo'
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                }}
                name='text' />
            {error ? <h3 className='todo-error'>Todo already exists. Please enter another todo.</h3> : ''}
            <button className="todo-button">Add Todo</button>
        </form>

    )
}

export default TodoForm
