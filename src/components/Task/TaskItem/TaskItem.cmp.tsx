import React from "react"

import { Task } from '../../../types/tasks';

import "./TaskItem.style.scss"

interface ITaskItem  {
    index: number,
    task: Task
}

const TaskItem: React.FC<ITaskItem> = ({index, task})=>{
    return (
        <li className="item" key={index}> {task}</li>;
    )
}

export default TaskItem