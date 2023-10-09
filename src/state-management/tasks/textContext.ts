import React, { Dispatch } from 'react';
import { Task } from './TaskList';
import { TaskAction } from './taskReducer';

interface TasksContextType {
	tasks: Task[];
	dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
	{} as TasksContextType
);
export default TasksContext;
