import React from 'react'
import './App.css'
import TodoIndex from './Todo apps/Class/TodoIndex'
import TodoIndex2 from './Todo apps/Hooks/TodoIndex2'


function App() {
    return (
        <div className='app_container'>
            <h3 className='classTodo_header'>Class todo</h3>

            <div className='todo_container'>
                 < TodoIndex />
            </div>
           

            <h3>Hooks todo</h3>
            < TodoIndex2 />

        </div>
    )
}

export default App
