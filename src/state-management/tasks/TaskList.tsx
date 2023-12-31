import useTask from './useTask';

export interface Task {
	id: number;
	title: string;
}

const TaskList = () => {
	const { tasks, dispatch } = useTask();

	return (
		<>
			<button
				onClick={() =>
					dispatch({
						type: 'ADD',
						task: {
							id: tasks.length + 1,
							title: 'New Task',
						},
					})
				}
				className='btn btn-primary my-3'
			>
				Add Task
			</button>
			<ul className='list-group'>
				{tasks.map(task => (
					<li
						key={task.id}
						className='list-group-item d-flex justify-content-between align-items-center'
					>
						<span className='flex-grow-1'>
							{task.title} and {task.id}
						</span>
						<button
							className='btn btn-outline-danger'
							onClick={() =>
								dispatch({
									type: 'DELETE',
									taskId: task.id,
								})
							}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default TaskList;
