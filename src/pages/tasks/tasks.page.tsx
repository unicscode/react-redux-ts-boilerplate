import React from 'react';
import { connect } from 'react-redux';

import { Task } from '../../types/tasks';
import { TaskState } from '../../redux/task/task.reducer';
import { fetchTasks } from '../../redux/task/task.actions';

import TaskItem from '../../components/Task/TaskItem/TaskItem.cmp';

interface StateProps {
  tasks: Task[];
}

interface DispatchProps {
  fetchTasks: () => void;
}

interface OwnProps {}

interface AllProps extends StateProps, DispatchProps, OwnProps {}

const Tasks: React.FC<AllProps> = ({ tasks, fetchTasks }) => {
  const fetchAllTasks = () => {
    fetchTasks();
  };
  return (
    <ul>
      <button onClick={fetchAllTasks}>fetch tasks</button>
      {tasks.map((task, index) => {
        return <TaskItem index={index} task={task} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state: TaskState) => ({
  tasks: state.tasks,
});

export const ConnectedTasks = connect<StateProps, DispatchProps, OwnProps, TaskState>(mapStateToProps, { fetchTasks })(
  Tasks,
);
