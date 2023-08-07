import React, { useRef } from 'react'

export const InputTask = (props) => {
    let date = new Date();
    let nameRef = useRef();
    let timeRef = useRef();

    const addTask = () => {
        let toDoItem = {
            id:Date.now(),
            name:nameRef.current.value,
            time:timeRef.current.value
        }
        
        props.addTaskToArr(toDoItem);
    }

    return (
        <div>
            <h3>Task Name:</h3>
            <input
                type="text"
                className='form-control'
                placeholder='Enter task'
                ref={nameRef} />
            <h3>Time:</h3>
            <input
                type="time"
                className='form-control'
                defaultValue={`${date.getHours()}:${date.getMinutes()}`}
                ref={timeRef} />
            <div className="my-3 text-center">
                <button
                    className='btn btn-success me-2'
                    onClick={addTask}
                >Add Task</button>
                <button className='btn btn-danger'>Reset Tasks</button>
            </div>
        </div>
    )
}
