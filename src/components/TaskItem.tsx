import React from "react";
import type { Task } from "../types";
import styles from "./TaskItem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface TaskProps {
  task: Task;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: (id: number) => void;
}

const TaskItem: React.FC<TaskProps> = ({
  task,
  toggleTask,
  removeTask,
  editTask,
}) => {
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
        <span
          className={
            task.isCompleted
              ? `${styles.text} ${styles.completed}`
              : styles.text
          }
        >
          {task.text}
        </span>
      </label>
      <div>
        <button
          className={styles.button}
          onClick={() => editTask(task.id)}
          title="Изменить"
        >
          <EditIcon fontSize="small" color="action" />
        </button>
        <button
          className={styles.button}
          onClick={() => removeTask(task.id)}
          title="Удалить"
        >
          <DeleteIcon fontSize="small" color="action" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
