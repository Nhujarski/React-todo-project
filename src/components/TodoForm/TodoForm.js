import React, { useState } from 'react'
import './styles.css'

function TodoForm({ onSubmit }) {
    /**
     * State
     */
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
        })
    }

    /**
     * Render
     */
    return (
        <div className='todo-wrapper'>
            <h1 className='todo-header'>My Todo List</h1>
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
                <button className="todo-button" onClick={console.log('Clicked>>>>')}>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm
