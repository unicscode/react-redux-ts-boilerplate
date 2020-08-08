import { combineReducers } from 'redux';

import taskReducer from './task/task.reducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
