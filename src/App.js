import React, { useContext, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import EditTask from './components/EditTask';
import TasksContext from './context'
import TasksReducer from './Reducer'

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
}

export default App;
