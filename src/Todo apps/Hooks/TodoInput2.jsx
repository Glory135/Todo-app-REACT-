import React, { useState } from 'react'

const TodoInput2 = (props) => {

    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodos = [...props.todos]
        newTodos.push(todo);

        props.setTodos(newTodos)
        setTodo('')
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='todo'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}

                />

                <button>
                    Add
               </button>
            </form>



        </div>
    )
}

export default TodoInput2
