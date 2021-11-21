import { useContext } from 'react';
import { Task, TasksContext} from '../Reference-import'

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
