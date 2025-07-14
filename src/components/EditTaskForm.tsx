import React, { useState } from "react";
import styles from "./EditTaskForm.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import type { Task } from "../types";

interface EditTaskProps {
  task: Task;
  editText: (text: string, id: number) => void;
}

const EditTaskForm: React.FC<EditTaskProps> = ({ task, editText }) => {
  const [editingText, setEditingText] = useState(task.text);
  const [isValidated, setIsValidated] = useState(true);

  const checkInput = (text: string) =>
    text ? setIsValidated(true) : setIsValidated(false);

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        if (isValidated) editText(editingText, task.id);
      }}
    >
      <input
        type="text"
        className={
          isValidated ? styles.input : `${styles.input} ${styles.error}`
        }
        value={editingText}
        onChange={(event) => setEditingText(event.target.value)}
        placeholder="Новая задача"
      />
      {editingText && (
        <button
          className={styles.clear}
          onClick={() => {
            setEditingText("");
          }}
        >
          <ClearIcon fontSize="small" color="action" />
        </button>
      )}
      <button className={styles.button} onClick={() => checkInput(editingText)}>
        Изменить
      </button>
    </form>
  );
};

export default EditTaskForm;
