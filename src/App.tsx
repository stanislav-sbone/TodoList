import { useState } from "react";
import "./App.css";
import type { Task } from "./types";
import TodoForm from "./components/TodoForm";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    if (text) {
      const newTask = {
        id: Date.now(),
        text: text,
        isCompleted: false,
        isEditing: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <>
      <TodoForm addTask={addTask} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
