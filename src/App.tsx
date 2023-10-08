import { useReducer } from 'react';
import './App.css';
import LoginStatus from './state-management/LoginStatus';
import taskReducer from './state-management/reducers/taskReducer';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import TasksContext from './state-management/contexts/textContext';
import authReducer from './state-management/reducers/authReducer';
import AuthContext from './state-management/contexts/authContext';

function App() {
	const [tasks, taskDispatch] = useReducer(taskReducer, []);
	const [user, authDispatch] = useReducer(authReducer, '');

	return (
		<AuthContext.Provider
			value={{
				user,
				dispatch: authDispatch,
			}}
		>
			<TasksContext.Provider
				value={{
					tasks,
					dispatch: taskDispatch,
				}}
			>
				<NavBar />
				<HomePage />
			</TasksContext.Provider>
		</AuthContext.Provider>
	);
}
export default App;
