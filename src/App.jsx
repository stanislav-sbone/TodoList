import { useState, useEffect, useRef } from "react";
import TodoForm from "./components/TodoForm";
import Task from "./components/Task";
import EditTodoForm from "./components/EditTodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const addTask = () => {
    let inputValue = document.querySelector("#todo-list__input");
    if (inputValue.value.trim()) {
      let result =
        inputValue.value[0].toUpperCase() +
        inputValue.value.slice(1).toLowerCase();
      setTodos([
        ...todos,
        { id: Date.now(), text: result, isCompleted: false, isEditing: false },
      ]);
    }
  };

  const completeTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const removeTask = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editText = (text, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <>
      <div className="todo-list">
        <h1 className="todo-list__title">React ToDo-list &#9989;</h1>
        <TodoForm addTask={addTask} ref={ref} />
        <hr className="todo-hr" />
        <ul className="todo-list__list">
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm key={todo.id} editText={editText} todo={todo} />
            ) : (
              <Task
                key={todo.id}
                id={todo.id}
                text={todo.text}
                isCompleted={todo.isCompleted}
                removeTask={removeTask}
                completeTask={completeTask}
                editTodo={editTodo}
              />
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
