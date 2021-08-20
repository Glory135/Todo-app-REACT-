import React, { Component } from 'react'

class SubTaskForm extends Component {
    render() {
        return (
            <div>

                <form onSubmit={this.props.subtaskClick}>
                    <input
                        type="text"
                        name='todo'
                        value={this.props.subtask}
                        onChange={this.props.subChange}
                    />
                    <button>
                        Add subtask
                </button>
                </form>



            </div>
        )
    }
}

export default SubTaskForm
