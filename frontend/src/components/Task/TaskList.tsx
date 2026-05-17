// listado de tareas

import type { Task } from "../../types/task";
import TaskCard from "./TaskCard";

interface TaskListProps {
  Tasks: Task[];
}

function TaskList({ Tasks }: TaskListProps) {
  return (
    <ol>
      {Tasks.map((t) => {
        return <TaskCard Task={t} />;
      })}
    </ol>
  );
}

export default TaskList;
