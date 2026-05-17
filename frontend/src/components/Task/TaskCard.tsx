// Task individual

import type { Task } from "../../types/task";
import Button from "../ui/Button";
import "./TaskCard.css";

interface TaskCardProps {
  Task: Task;
}

function TaskCard({ Task }: TaskCardProps) {
  return (
    <div className="task-card">
      <p>{Task.text}</p>
      <div className="task-action">
        <Button text="Eliminar" className="button" />
        <Button text="Actualizar" />
      </div>
    </div>
  );
}

export default TaskCard;
