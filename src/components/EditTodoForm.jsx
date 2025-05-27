import { useState } from "react";
import styles from "./EditTodoForm.module.css";

function EditTodoForm({ todo, editText }) {
  const [value, setValue] = useState(todo.text);

  return (
    <form
      className={styles.todoFormEdit}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        className={styles.editInput}
        type="text"
        value={value}
        onChange={(elem) => setValue(elem.target.value)}
        placeholder="Изменить задачу"
      />
      <button
        className={styles.editButton}
        type="submit"
        onClick={() => {
          editText(value, todo.id);
        }}
      >
        Изменить
      </button>
    </form>
  );
}

export default EditTodoForm;
