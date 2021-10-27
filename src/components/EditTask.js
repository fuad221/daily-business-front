import React, { useState, useContext, useRef, useEffect } from 'react';
import TasksContext from '../context';
import { Button, Form, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'

function EditTask() {
  const { state, dispatch } = useContext(TasksContext);
  const [input, setInput] = useState(state.currentTask.text);
  console.log(input);

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Cannot add a blank task');
    } else {
      dispatch({ type: 'UPDATE_TASK', payload: input });
      setInput('');
    }
  };


  return (
    
      <Form onSubmit={handleSubmit} action='' className="align-content d-flex justify-content-center ">
        <Form.Group className="mb-3" >

          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1" className="bg-warning"
            >Task
            </InputGroup.Text>
            <FormControl
              placeholder="write your task here"
              aria-label="Task"
              aria-describedby="basic-addon1"
              ref={ref}
              value={input}
              onChange={handleChange}
            />
          </InputGroup>

          <Button type="submit" >Update task</Button>
        </Form.Group>
      </Form>
  )
}

export default EditTask
