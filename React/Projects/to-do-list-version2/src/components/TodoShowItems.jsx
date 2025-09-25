import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css";

const TodoShowItems = ({ todoData }) => {
  return (
    <div className={styles.itemContainer}>
      {todoData.map(item => <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate}></TodoItem>)}
    </div>
  );
};
export default TodoShowItems;
