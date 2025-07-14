import React from "react";
import TaskItem from "./TaskItem";
import type { Task } from "../types";
import styles from "./TasksList.module.css";
import EditTaskForm from "./EditTaskForm";

interface ListProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

const TasksList: React.FC<ListProps> = ({ tasks, setTasks }) => {
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted: false,
              isEditing: !task.isEditing,
            }
          : task
      )
    );
  };

  const editText = (text: string, id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text, isEditing: !task.isEditing } : task
      )
    );
  };

  return (
    <div className={styles.list}>
      {tasks.length ? (
        tasks.map((task) =>
          task.isEditing ? (
            <EditTaskForm key={task.id} task={task} editText={editText} />
          ) : (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              removeTask={removeTask}
              editTask={editTask}
            />
          )
        )
      ) : (
        <p className={styles.empty}>Сейчас список задач пуст</p>
      )}
    </div>
  );
};

export default TasksList;
