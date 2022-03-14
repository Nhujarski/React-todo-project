import React, { useState } from 'react'
import './styles.css'


function Todo({ todos }) {
    /**
     * State
     */
    // const [edit, setEdit] = useState({ id: null, value: '' })
    const [checked, setChecked] = useState(false)



    /**
     * Render
     */
    return todos.map((todo, index) => (
        <div key={index} className={checked ? 'todo-item-checked' : 'todo-item'} >
            <input type="checkbox" checked={checked} onChange={(e) => {
                console.log(index)
                console.log(todo.id)
                setChecked(e.target.checked)
            }}
            />
            <h3 key={todo.id} className='todo-text' >{todo.text}</h3>
        </div>
    ))
}

export default Todo
