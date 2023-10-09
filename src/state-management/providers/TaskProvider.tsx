import { ReactNode, useReducer } from 'react';
import taskReducer from '../reducers/taskReducer';
import TasksContext from '../contexts/textContext';

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
