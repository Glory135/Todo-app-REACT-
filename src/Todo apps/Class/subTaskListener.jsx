import React, { Component } from 'react'

class SubTaskListener extends Component {
    render() {

        const style = {
            fontSize: '15px',
            fontWeight: 500
        }

         const completed_style = {
            fontSize: '15px',
            fontWeight: 500,
            textDecoration: 'line-through'
        }

        return (
            <div style={{ marginLeft: 15 }}>
                <label style={this.props.subtask_completed === true ? completed_style :  style}>
                    <input type="checkbox" 
                            checked={this.props.todo_completed}
                            onChange={() => this.props.subComplete(this.props.eachSubtask)}
                    />
                    {this.props.eachSubtask}
                </label>
            </div>
        )
    }
}

export default SubTaskListener
