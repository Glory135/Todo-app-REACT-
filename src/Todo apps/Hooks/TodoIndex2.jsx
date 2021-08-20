import React, { useState } from 'react'
import TodoInput2 from './TodoInput2'
import TodoListener2 from './TodoListener2'

const TodoIndex2 = () => {

    const [todos, setTodos] = useState([])

    return (
        <div>

            <TodoInput2
                todos={todos}
                setTodos={setTodos}
            />


            {
                todos.length > 0 ?
                    todos.map((eachTodo) => {
                        return <TodoListener2
                            key={eachTodo}
                            eachTodo={eachTodo}
                        />
                    })
                    :
                    <span>no todos</span>
            }

        </div>
    )
}

export default TodoIndex2
