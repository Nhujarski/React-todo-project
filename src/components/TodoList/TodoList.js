import React, { useState } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'
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

    const checkTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isChecked = !todo.isChecked
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    /**
     * Render
     */
    return (
        <div>
            <h1>What do we have to do today?</h1>
            <TodoForm onSubmit={addTodo} todo={todos} />
            <Todo todos={todos} checkTodo={checkTodo} />
        </div>
    )
}

export default TodoList
