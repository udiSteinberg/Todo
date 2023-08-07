import React from 'react'
import { InputTask } from '../components/InputTask'
import { TaskList } from '../components/TaskList'

export const MainPage = () => {
  return (
    <div className='container'>
        <h1>ToDo App</h1>
        <InputTask/>
        <TaskList/>
    </div>
  )
}
