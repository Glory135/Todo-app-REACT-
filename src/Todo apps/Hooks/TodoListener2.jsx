import React from 'react'

const TodoListener2 = (props) => {
    return (
        <div>
            <label >
                <input type="checkbox" />
                {props.eachTodo}
            </label>
        </div>
    )
}

export default TodoListener2
