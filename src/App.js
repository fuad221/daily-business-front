import React, { useContext, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header, Footer, AddTask, TaskList, EditTask, TasksContext, TasksReducer} from './Reference-import'

function App() {
  const initialState = useContext(TasksContext);
  const [state, dispatch] = useReducer(TasksReducer, initialState);
  return (
    <div>
      <TasksContext.Provider value={{ state, dispatch }}>
        <Header />

        {state.currentTask === null ? (
          <div>
            <AddTask />
            <TaskList />
          </div>
        ) : (
          <EditTask />
        )}
      </TasksContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
