import React from 'react'
import { InputTask } from '../components/InputTask'
import { TaskList } from '../components/TaskList'

export const MainPage = () => {
    return (
        <div className='container'>
            <h1 className='display-4 text-center'>ToDo App</h1>
            <div className='col-lg-6 p-3 mx-auto'>
                <InputTask />
                <TaskList />
            </div>
        </div>
    )
}
