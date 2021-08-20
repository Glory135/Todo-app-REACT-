import React, { Component } from 'react'
import SubtaskForm from './subTaskForm'
import SubtaskListener from './subTaskListener'


class TodoListener extends Component {

    state = {
        subtasks: [],
        subtask: '',
        subtask_completed: false
    }

    

    subtaskClick = (e) => {
        e.preventDefault()

        const newSub = [...this.state.subtasks];
        newSub.push(this.state.subtask);

        this.setState({
            subtasks: newSub,
            subtask: ''
        })

        console.log(this.state.subtasks);
        console.log(newSub);
    }


     subComplete = (subTask) => {
        this.setState((prevState) => {
            const updatedTodo = prevState.subtasks.map((subtask) => {
                if (subtask === subTask) {
                    this.state.subtask_completed = !this.state.subtask_completed
                }
                return subtask
            })
            return {
                subtasks: updatedTodo
            }
        })
    }

    subChange = (e) => {
        this.setState({
            subtask: e.target.value
        })
    }

    render() {
        const style = {
            fontSize: '23px',
            fontWeight: 500
        }
        const completed_style = {
            fontSize: '23px',
            fontWeight: 500,
            textDecoration: 'line-through'
        }
  
        return (
            <div>

                <label style={this.props.todo_completed === true ? completed_style :  style}>
                    <input
                        type="checkbox"
                        checked={this.props.todo_completed}
                        onChange={() => this.props.handleComplete(this.props.eachTodo)}
                    />
                    {this.props.eachTodo}
                </label>
                <br />

            <div className='subtask_container'>
               {
                    this.state.subtasks.length > 0 ?
                        this.state.subtasks.map((eachSubtask) => < SubtaskListener
                                                                key={eachSubtask}
                                                                eachSubtask={eachSubtask}
                                                                subComplete = {this.subComplete}
                                                     subtask_completed = {this.state.subtask_completed}
                                                                 />
                                                 )
                        :
                        <span>no subtask</span>
                }

                < SubtaskForm
                    subtask={this.state.subtask}
                    subtaskClick={this.subtaskClick}
                    subChange={this.subChange}
                />
            </div>
            

            </div>
        )
    }
}

export default TodoListener
