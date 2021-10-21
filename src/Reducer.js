import React from 'react'

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

        default:
            return state;
    }
}

export default Reducer
