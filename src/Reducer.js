import { v4 as uuidv4 } from 'uuid';

function Reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = {
        id: uuidv4(),
        text: action.payload
      };
      const addedTasks = [...state.tasks, newTask];
      console.log(addedTasks);
      return {
        ...state,
        tasks: addedTasks,
      };

    case 'DELETE_TASK':
      const deletedTasks = state.tasks.filter(
        e => e.id !== action.payload
      );
      return {
        ...state,
        tasks: deletedTasks
      };

    case 'SET_CURRENT_TASK':
      return {
        ...state,
        currentTask: action.payload
      };

    case 'UPDATE_TASK':
      const updatedTask = {
        ...state.currentTask,
        text: action.payload
      };

      const updatedTasksIndex = state.tasks.findIndex(
        e => e.id === state.currentTask.id
      );

      const updatedTasks = [
        ...state.tasks.slice(0, updatedTasksIndex),
        updatedTask,
        ...state.tasks.slice(updatedTasksIndex + 1)
      ];

      return {
        currentTask: null,
        tasks: updatedTasks
      };
    default:
      return state;
  };
};

export default Reducer;
