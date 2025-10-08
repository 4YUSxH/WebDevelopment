import Heading from "./components/Heading";
import TodoData from "./components/TodoData";
import TodoShowItems from "./components/TodoShowItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  const intialTodoData = [];

  const [todoItems, setTodoItems] = useState(intialTodoData);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems, {name: itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  }

  const handleDeletion = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <Heading></Heading>
      <TodoData onNewItem={handleNewItem}></TodoData>
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoShowItems todoData={todoItems} onDeleteClick={handleDeletion}></TodoShowItems>
    </center>
  );
}

export default App;
