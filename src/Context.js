import React, {createContext} from 'react'
const NotesContext = createContext({
    currentNote: null,
    notes: [
        { id: 1, text: 'Do homework' },
        { id: 2, text: 'Take out trash' },
        { id: 3, text: 'Clean room' }
      ]
    });
    export default NotesContext;



