import React from 'react'

export const InputTask = () => {
    let date = new Date;

    return (
        <div>
            <h3>Task Name:</h3>
            <input type="text" placeholder='Enter task' className='form-control' />
            <h3>Time:</h3>
            <input type="time" defaultValue={`${date.getHours()}:${date.getMinutes()}`} className='form-control' />
            <div className="my-3 text-center">
                <button className='btn btn-success me-2'>Add Task</button>
                <button className='btn btn-danger'>Reset Tasks</button>
            </div>
        </div>
    )
}
