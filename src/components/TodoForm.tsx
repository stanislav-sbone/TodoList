import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import ClearIcon from "@mui/icons-material/Clear";

interface TodoFormProps {
  addTask: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTask }) => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <h1 className={styles.title}>TODO LIST</h1>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          setText("");
        }}
      >
        <input
          type="text"
          className={styles.input}
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Новая задача"
        />
        {text && (
          <button
            className={styles.clear}
            onClick={() => {
              setText("");
            }}
          >
            <ClearIcon fontSize="small" color="action" />
          </button>
        )}
        <button className={styles.button} onClick={() => addTask(text)}>
          Добавить
        </button>
      </form>
    </>
  );
};

export default TodoForm;
