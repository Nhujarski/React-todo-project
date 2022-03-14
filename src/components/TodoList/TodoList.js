import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import './styles.css'

function TodoList() {
    /**
     * State
     */
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
    /**
     * Render
     */
    return (
        <div>
            <h1>What do we have to do today?</h1>
            <TodoForm onSubmit={addTodo} />
            {todos.map((todo) => (
                <div className='todo-item'>
                    <h3 id={todo.id} className='todo-text'>{todo.text}</h3>
                </div>
            ))}
        </div>
    )
}

export default TodoList
