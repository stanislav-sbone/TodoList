import React from "react";
import type { Task } from "../types";
import styles from "./TaskItem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskProps {
  task: Task;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

const TaskItem: React.FC<TaskProps> = ({ task, toggleTask, removeTask }) => {
  return (
    <div
      className={
        task.isCompleted ? `${styles.task} ${styles.completed}` : styles.task
      }
    >
      <label>
        <input
          type="checkbox"
          className={styles.checkbox}
          onClick={() => toggleTask(task.id)}
        />
        <span className={styles.text}>{task.text}</span>
      </label>
      <button onClick={() => removeTask(task.id)} title="Удалить">
        <DeleteIcon />
      </button>
    </div>
  );
};

export default TaskItem;
