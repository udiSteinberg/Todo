import React from 'react'
import { Task } from './Task'

export const TaskList = (props) => {
  return (
    <div>
        <h3>Tasks You Added:</h3>
        {
            props.tasks_ar.map(item =>{
                return(
                    <Task key={item.id} item={item} removeSingleTask = {props.removeSingleTask}/>
                )
            })
        }
    </div>
  )
}
