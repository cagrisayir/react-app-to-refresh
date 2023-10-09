import { useContext } from 'react';
import TasksContext from './textContext';

const useTask = () => useContext(TasksContext);

export default useTask;
