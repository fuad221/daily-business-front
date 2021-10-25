import React, { useState, useContext, useRef, useEffect } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'





import TasksContext from '../context';

function AddTask() {
    const { dispatch } = useContext(TasksContext);
    const [value, setValue] = useState("")

    let ref = useRef();

    useEffect(() => {
        ref.current.focus();
    });

    const handleChange = e => {
        setValue(e.target.value);
        console.log(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() === "") {
            alert("can't add a black Task");
        } else {
            dispatch({ type: 'ADD_TASK', payload: value });
            setValue("");
        }
    }


    return (
        <Form onSubmit={handleSubmit} action='' className="align-content d-flex justify-content-center ">
            <Form.Group className="mb-3" >

                <InputGroup className="mb-3 ">
                    <InputGroup.Text id="basic-addon1" className="bg-warning" >Task</InputGroup.Text>
                    <FormControl
                        placeholder="write your task here"
                        aria-label="Task"
                        aria-describedby="basic-addon1"
                        ref={ref}
                        value={value}
                        onChange={handleChange}
                    />
                </InputGroup>

                <Button type="submit" >Add task</Button>
            </Form.Group>
        </Form>
    )
}

export default AddTask
