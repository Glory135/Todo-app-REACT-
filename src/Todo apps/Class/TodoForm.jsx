import React, { Component } from 'react'

class TodoForm extends Component {


    render() {
        return (
            <div>

                <form onSubmit={this.props.handleSubmit}>
                    <input
                        type="text"
                        name='todo'
                        value={this.props.todo}
                        onChange={this.props.onChange}
                    />
                    <button>
                        Add todo
                </button>
                </form>

            </div>
        )
    }
}

export default TodoForm
