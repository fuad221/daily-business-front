import { v4 as uuidv4 } from 'uuid';



function Reducer(state, action) {
    switch (action.type) {
        case "SET_CURRENT-NOTE":
            return {
                ...state,
                currentNote: action.payload
            }

        case 'DELETE_NOTE':
            const deletedNotes = state.notes.filter(
                note => note.id !== action.payload
            );
            return {
                ...state,
                notes: deletedNotes
            };

        case 'ADD_NOTE':
            const newNote = {
                id: uuidv4(),
                text: action.payload
            };

            const addedNotes = [...state.notes, newNote];

            return {
                ...state,
                notes: addedNotes
            };


        case 'UPDATE_NOTE':
            const updatedNote = {
                ...state.currentNote,
                text: action.payload
            };

            const updatedNotesIndex = state.notes.findIndex(
                note => note.id === state.currentNote.id
            );

            const updatedNotes = [
                ...state.notes.slice(0, updatedNotesIndex),
                updatedNote,
                ...state.notes.slice(updatedNotesIndex + 1)
            ];

            return {
                currentNote: null,
                notes: updatedNotes
            };
            
        default:
            return state;
    }
}

export default Reducer
