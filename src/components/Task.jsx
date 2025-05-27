import { Button } from "antd";
import { CheckOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./Task.module.css";

function TodoItem(props) {
  const { id, text, isCompleted, removeTask, completeTask, editTodo } = props;

  return (
    <li
      className={
        isCompleted ? `${styles.task} ${styles.taskDone}` : styles.task
      }
    >
      <p className={styles.taskText} onClick={() => completeTask(id)}>
        {text}
      </p>
      <div className={styles.taskButtons}>
        <EditOutlined
          title="Изменить"
          onClick={() => {
            editTodo(id);
          }}
          className={styles.taskEdit}
        />
        <Button onClick={() => completeTask(id)} color="green" variant="solid">
          <CheckOutlined />
        </Button>
        <Button onClick={() => removeTask(id)} color="danger" variant="solid">
          <DeleteOutlined onClick={() => removeTask(id)} />
        </Button>
      </div>
    </li>
  );
}

export default TodoItem;
