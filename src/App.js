import React, {useContext, useReducer} from 'react'
import NotesContext from './Context'
import notesReducer from './Reducer'
import Nav from './components/Nav'

function App() {
  const intialStat = useContext(NotesContext)
  const [state, dispatch] = useReducer(notesReducer, intialStat)

  return (
    <NotesContext.Provider value={state, dispatch}>
      <Nav />
    </NotesContext.Provider>
  );
}

export default App;
