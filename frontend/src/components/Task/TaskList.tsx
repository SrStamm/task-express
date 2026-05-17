// listado de tareas

import type { Task } from "../../types/task";
import TaskCard from "./TaskCard";
import "./TaskList.css";

interface TaskListProps {
  Tasks: Task[];
}

function TaskList({ Tasks }: TaskListProps) {
  return (
    <ol className="task-list">
      {Tasks.map((t) => {
        return <TaskCard key={t.id} Task={t} />;
      })}
    </ol>
  );
}

export default TaskList;
