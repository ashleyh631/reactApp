import { combineReducers } from 'redux';
import activeTask from './activeTask';
import pendingTask from '../Reducers/pendingTask';
// import tasks from './tasks';

export default combineReducers({
  activeTask,
  pendingTask,
  // tasks,
});
