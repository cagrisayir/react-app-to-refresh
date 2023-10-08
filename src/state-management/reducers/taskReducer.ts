import { Task } from '../TaskList';

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
export default taskReducer;
