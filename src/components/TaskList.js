import React, { useContext } from 'react'
import Task from './Task'
import TasksContext  from '../context'

function TaskList() {
    const { state } = useContext(TasksContext);

    return (
        <div >
        {state.tasks.map((task, i) => {
          return <Task task={task} key={i} />;
        })}
        </div>
    )
}

export default TaskList
