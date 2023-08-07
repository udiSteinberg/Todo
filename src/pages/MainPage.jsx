import React, { useState } from 'react'
import { InputTask } from '../components/InputTask'
import { TaskList } from '../components/TaskList'

export const MainPage = () => {
    let [tasks_ar, setTasks_ar] = useState([]);

    const addTaskToArr = (_taskItem)=>{
        setTasks_ar([...tasks_ar, _taskItem]);
    }

    return (
        <div className='container'>
            <h1 className='display-4 text-center'>ToDo App</h1>
            <div className='col-lg-6 p-3 mx-auto'>
                <InputTask addTaskToArr = {addTaskToArr}/>
                <TaskList />
            </div>
        </div>
    )
}
