import React, { useContext } from 'react'
import TasksContext from '../context'
import './Task.css'
import { Button} from 'react-bootstrap'


function Task({ task }) {
    const { dispatch } = useContext(TasksContext)
    return (
        <div className=" m-auto mt-4  p-1 border" style={{ width: '25%', height: "auto" }}>
            <p>{task.text}</p>
            <div className="btnED">
                    <Button onClick={() => dispatch({ type: "SET_CURRENT_TASK", payload: task })} variant='danger' >Edit</Button>


                    <Button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })} variant="secondary" >Delete</Button>

            </div>

        </div>
    )
}


export default Task

