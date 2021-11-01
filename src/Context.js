import React, {createContext} from 'react';

const TasksContext = createContext({
    currentTask: null,
    tasks: [
        { id: 1, text: 'Writing a completed work report' },
        { id: 2, text: 'Send an email to the manager' },
        { id: 3, text: 'Buy scooter from amazon' }
      ]
    });

    export default TasksContext;

