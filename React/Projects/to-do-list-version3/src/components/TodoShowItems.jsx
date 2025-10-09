import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css";

const TodoShowItems = ({ todoData, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {todoData.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoShowItems;
