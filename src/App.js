import React, {useContext, useReducer} from 'react'
import NotesContext from './Context'
import notesReducer from './Reducer'
import Nav from './components/Nav'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'



function App() {
  const intialStat = useContext(NotesContext)
  const [state, dispatch] = useReducer(notesReducer, intialStat)

  return (
    <NotesContext.Provider value={{state, dispatch}}>
      <Nav />
      <AddNote />
      <NoteList />
    </NotesContext.Provider>
  );
}

export default App;
