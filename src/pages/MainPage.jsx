import React, { useState } from 'react'
import { sortBy } from 'lodash'

import { InputTask } from '../components/InputTask'
import { TaskList } from '../components/TaskList'

export const MainPage = () => {
    let [tasks_ar, setTasks_ar] = useState([]);

    const addTaskToArr = (_taskItem) => {
        let sort_ar = [...tasks_ar, _taskItem];
        sort_ar = sortBy(sort_ar, "time")
        setTasks_ar(sort_ar);
    }

    const removeAllTasks = () => {
        setTasks_ar([]);
    }

    const removeSingleTask = (_id) =>{
        let temp_ar = tasks_ar.filter(item => item.id !== _id);
        setTasks_ar(temp_ar);
    }

    return (
        <div className='container'>
            <h1 className='display-4 text-center'>ToDo App</h1>
            <div className='col-lg-6 p-3 mx-auto'>
                <InputTask addTaskToArr={addTaskToArr} removeAllTasks={removeAllTasks} />
                <TaskList tasks_ar={tasks_ar} removeSingleTask={removeSingleTask}/>
            </div>
        </div>
    )
}
