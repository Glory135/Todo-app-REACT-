import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoListener from './TodoListener'

class TodoIndex extends Component {

    state = {
        todo: '',
        todos: [],
        todo_completed: false
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newTodo = [...this.state.todos]
        newTodo.push(this.state.todo)


        this.setState({
            todos: newTodo,
            todo: ''
        })
    }


      handleComplete = (toDo) => {
        this.setState((prevState) => {
            const updatedTodo = prevState.todos.map((todo) => {
                if (todo === toDo) {
                    this.state.todo_completed = !this.state.todo_completed
                }
                return todo
            })
            return {
                todos: updatedTodo
            }
        })
    }

    onChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    render() {
        return (
            <div>
                <TodoForm
                    todo={this.state.todo}
                    todos={this.state.todos}
                    handleSubmit={this.handleSubmit}
                    onChange={this.onChange}
                />


                {
                    this.state.todos.length > 0 ?
                        this.state.todos.map((eachTodo) => <TodoListener 
                                                            key={eachTodo} 
                                                            eachTodo={eachTodo}
                                                            todo_completed={this.state.todo_completed}
                                                             handleComplete={this.handleComplete}
                                                           />
                                             )
                        :
                        <span>no todos</span>
                }

            </div>
        )
    }
}

export default TodoIndex
