import { Action } from 'redux';
import { Task } from '../../types/tasks';
import { TasksActionsTypes, FETCH_TASKS } from './task.types';

export interface FetchTasksAction extends Action<TasksActionsTypes> {
  tasks: Task[];
}

export const fetchTasks = (): FetchTasksAction => ({
  type: FETCH_TASKS,
  tasks: [{ title: 'first tasks' }, { title: 'second taks' }],
});

export type AllFetchActionsTypes = FetchTasksAction;
