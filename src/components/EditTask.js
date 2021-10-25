import React, { useState, useContext, useRef, useEffect } from 'react';
import TasksContext from '../context';
import { Button, Form, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'

function EditTask() {
  const { state, dispatch } = useContext(TasksContext);
  const [value, setValue] = useState(state.currentTask.text);

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      alert('Cannot add a blank task');
    } else {
      dispatch({ type: 'UPDATE_TASK', payload: value });
      setValue('');
    }
  };


  return (
    <>
      <Form onSubmit={handleSubmit} action='' className="align-content d-flex justify-content-center ">
        <Form.Group className="mb-3" >

          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1" className="bg-warning"
              cols='30'
              rows='10'
            >

              Task</InputGroup.Text>
            <FormControl
              placeholder="write your task here"
              aria-label="Task"
              aria-describedby="basic-addon1"
              ref={ref}
              value={value}
              onChange={handleChange}
            />
          </InputGroup>

          <Button type="submit" >Update task</Button>
        </Form.Group>
      </Form>




      {/* <div className='task-form'>
        <form onSubmit={handleSubmit} action=''>
          <textarea
            ref={ref}
            onChange={handleChange}
            value={value}
            name=''
            id=''
            cols='30'
            rows='10'
          />
          <div style={{ textAlign: 'right' }}>
            <button>Update task</button>
          </div>
        </form>
      </div> */}
    </>
  )
}

export default EditTask
