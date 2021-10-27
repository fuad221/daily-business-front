import React, { useState, useContext, useRef, useEffect } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import TasksContext from '../context';

function AddTask() {
    const { dispatch } = useContext(TasksContext);
    const [input, setInput] = useState("")

    let ref = useRef();

    useEffect(() => {
        ref.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
        console.log(input);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (input.trim() === "") {
            alert("you can't add a black Task");
        } else {
            dispatch({ type: 'ADD_TASK', payload: input });
            setInput("");
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
                        value={input}
                        onChange={handleChange}
                    />
                </InputGroup>

                <Button type="submit" >Add task</Button>
            </Form.Group>
        </Form>
    )
}

export default AddTask
