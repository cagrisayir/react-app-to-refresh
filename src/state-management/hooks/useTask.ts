import { useContext } from 'react';
import TasksContext from '../contexts/textContext';

const useTask = () => useContext(TasksContext);

export default useTask;
