import React, { useContext, useReducer } from 'react'
import Nav from './components/Nav'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import EditNote from './components/EditNote';
import NotesContext from './Context'
import notesReducer from './Reducer'

function App() {
  const intialStat = useContext(NotesContext)
  const [state, dispatch] = useReducer(notesReducer, intialStat)

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <Nav />
      {state.currentNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </NotesContext.Provider>
  );
}

export default App;
