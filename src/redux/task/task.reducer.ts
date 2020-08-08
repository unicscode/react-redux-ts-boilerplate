import createReducer from '../createReducer';

import { FETCH_TASKS } from './task.types';
import { Task } from '../../types/tasks';
import { AllFetchActionsTypes } from './task.actions';

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

type Handlers = any;

const handlers: Handlers = {};

handlers[FETCH_TASKS] = (action: AllFetchActionsTypes, state: TaskState) => {
  return {
    ...state,
    tasks: action.tasks,
  };
};

export default createReducer(initialState, handlers);
