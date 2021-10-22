import React, {useContext} from 'react'
import NotesContext from '../Context'


function Note({note}) {
    const { dispatch } = useContext(NotesContext)
    return (
        <div className="note">
            <p>{note.text}</p>
            <button onClick={() => dispatch({type: "SET_CURRENT_NOTE", payload: note})} className='edit' >Edit</button>
            <button onClick={() => dispatch({type: "DELETE_NOTE", payload: note.id})} className='delete' >Delete</button>
        
            


        </div>
    )
}


export default Note
