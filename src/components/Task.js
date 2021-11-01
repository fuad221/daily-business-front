import React, { useContext } from 'react';
import TasksContext from '../context';
import './Task.css';
import { Button} from 'react-bootstrap';


function Task({ myTask }) {
    const { dispatch } = useContext(TasksContext)
    return (
        <div className=" m-auto mt-4  p-1 border" style={{ width: '25%', height: "auto" }}>
            <p>{myTask.text}</p>
            <div className="btnED">
                    <Button onClick={() => dispatch({ type: "SET_CURRENT_TASK", payload: myTask })} variant='danger' >Edit</Button>
                    <Button onClick={() => dispatch({ type: "DELETE_TASK", payload: myTask.id })} variant="secondary" >Delete</Button>

            </div>

        </div>
    );
};


export default Task;

