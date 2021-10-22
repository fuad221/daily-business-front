import React, { useContext, useReducer } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import EditNote from './components/EditNote';
import NotesContext from './context'
import notesReducer from './Reducer'

function App() {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <Header />
     
      {state.currentNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
       <Footer />
    </NotesContext.Provider> 
   
  );
}

export default App;
