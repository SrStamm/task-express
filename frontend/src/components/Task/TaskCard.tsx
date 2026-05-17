// Task individual

import type { Task } from "../../types/task";
import "./TaskCard.css";

interface TaskCardProps {
  Task: Task;
}

function TaskCard({ Task }: TaskCardProps) {
  return <div className="task-card">{Task.text}</div>;
}

export default TaskCard;
