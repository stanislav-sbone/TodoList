import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTask, ref }) {
  const [userInput, setUserInput] = useState("");

  return (
    <form
      className={styles.todoListForm}
      onSubmit={(event) => {
        event.preventDefault();
        setUserInput("");
      }}
    >
      <input
        className={styles.todoListInput}
        ref={ref}
        id="todo-list__input"
        type="text"
        placeholder="Введите задачу"
        value={userInput}
        onChange={(elem) => setUserInput(elem.target.value)}
      />
      <button className={styles.todoListButton} type="submit" onClick={addTask}>
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
