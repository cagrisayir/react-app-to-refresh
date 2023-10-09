import { ReactNode, useReducer } from 'react';
import TasksContext from './textContext';

import { Task } from './TaskList';

export interface AddTask {
	type: 'ADD';
	task: Task;
}

export interface DeleteTask {
	type: 'DELETE';
	taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
	switch (action.type) {
		case 'ADD':
			return [...tasks, action.task];
		case 'DELETE':
			return tasks.filter(task => task.id !== action.taskId);
	}
};

interface Props {
	children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
	const [tasks, dispatch] = useReducer(taskReducer, []);

	return (
		<TasksContext.Provider
			value={{
				tasks,
				dispatch,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
};

export default TaskProvider;
