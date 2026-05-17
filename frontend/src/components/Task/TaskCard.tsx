// Task individual

import type { Task } from "../../types/task";
import "./TaskCard.css";

interface TaskCardProps {
  Task: Task;
}

function TaskCard({ Task }: TaskCardProps) {
  return (
    <div className="task-card">
      <p>{Task.text}</p>
      <div>
        <button>Eliminar</button>
        <button>Actualizar</button>
      </div>
    </div>
  );
}

export default TaskCard;
