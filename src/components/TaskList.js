import React, { useContext } from 'react';
import Task from './Task';
import TasksContext  from '../context';

function TaskList() {
    const { state } = useContext(TasksContext);
    
    return (
        <div >
        {state.tasks.map((e, i) => {
          return <Task myTask={e} key={i} />;
        })}
        </div>
    );
};

export default TaskList;
