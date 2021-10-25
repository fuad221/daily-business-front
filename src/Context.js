import React from 'react'

const TasksContext = React.createContext({
    currentTask: null,
    tasks: [
        { id: 1, text: 'Do homework' },
        { id: 2, text: 'Take out trash' },
        { id: 3, text: 'Clean room' }
      ]
    });
    export default TasksContext;



