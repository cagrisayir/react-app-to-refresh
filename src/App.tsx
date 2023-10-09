import './App.css';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import AuthProvider from './state-management/providers/AuthProvider';
import TaskProvider from './state-management/providers/TaskProvider';

function App() {
	return (
		<AuthProvider>
			<TaskProvider>
				<NavBar />
				<HomePage />
			</TaskProvider>
		</AuthProvider>
	);
}
export default App;
