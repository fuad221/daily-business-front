import React, { useContext } from 'react'
import TasksContext from '../context'
import { Button, Col} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

function Task({ task }) {
    const { dispatch } = useContext(TasksContext)
    return (
        <div className=" m-auto mt-5  justify-content-aroud border" style={{ width: '25%', height: "auto" }}>
            <p>{task.text}</p>
            <Row>
                <Col>
                    <Button onClick={() => dispatch({ type: "SET_CURRENT_TASK", payload: task })} variant='danger' >Edit</Button>
                </Col>

                <Col>
                    <Button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })} variant="secondary" >Delete</Button>
                </Col>


            </Row>

        </div>
    )
}


export default Task
