import React, { useEffect, useState } from 'react'
import { sortBy } from 'lodash'

import { InputTask } from '../components/InputTask'
import { TaskList } from '../components/TaskList'

export const MainPage = () => {
    let [tasks_ar, setTasks_ar] = useState([]);

    useEffect(() => {
        if (localStorage["tasks"]) {
            setTasks_ar(JSON.parse(localStorage["tasks"]));
        }
    }, [])

    const addTaskToArr = (_taskItem) => {
        let sort_ar = [...tasks_ar, _taskItem];
        sort_ar = sortBy(sort_ar, "time")
        saveLocal(sort_ar);
    }

    const removeAllTasks = () => {
        saveLocal([]);
    }

    const removeSingleTask = (_id) => {
        let temp_ar = tasks_ar.filter(item => item.id !== _id);
        saveLocal(temp_ar);
    }

    const saveLocal = (_ar) => {
        localStorage.setItem("tasks", JSON.stringify(_ar));
        setTasks_ar(_ar);
    }

    return (
        <div className='container'>
            <h1 className='display-4 text-center'>ToDo App</h1>
            <div className='col-lg-6 p-3 mx-auto'>
                <InputTask addTaskToArr={addTaskToArr} removeAllTasks={removeAllTasks} />
                <TaskList tasks_ar={tasks_ar} removeSingleTask={removeSingleTask} />
            </div>
        </div>
    )
}
