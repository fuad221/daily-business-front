import React, { useState, useContext, useRef, useEffect } from 'react'
import NotesContext from '../Context';

function AddNote() {
    const { state, dispatch } = useContext(NotesContext);
    const [value, setValue] = useState("")

    let ref = useRef();

    useEffect(() => {
        ref.current.focus();
    });

    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() === "") {
            alert("can't add a black Task");
        } else {
            dispatch({ type: 'ADD_NOTE', payload: value });
            setValue("");
        }
    }



    return (
        <div className='note-form'>
            <form onSubmit={handleSubmit} action=''>
                <input type='text' ref={ref} onChange={handleChange} value={value} />
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default AddNote
