import React from 'react'

export const Task = (props) => {
    let { name, time, id } = props.item;

    return (
        <div className='shadow my-2 p-2'>
            <button
                className='btn btn-info float-end'
                onClick={() => { props.removeSingleTask(id) }}>Done</button>
            <h4>{name} - {time}</h4>
        </div>
    )
}
