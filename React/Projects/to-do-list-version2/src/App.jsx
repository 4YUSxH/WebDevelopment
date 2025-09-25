import Heading from "./components/Heading";
import TodoData from "./components/TodoData";
import TodoShowItems from "./components/TodoShowItems";
import "./App.css";

function App() {
  const todoData = [
    {
      name: "Buy Milk",
      dueDate: "04.11.25",
    },
    {
      name: "Attend Lec",
      dueDate: "05.11.25",
    },
    {
      name: "Learn React",
      dueDate: "05.11.25",
    },
  ];
  return (
    <center className="todo-container">
      <Heading></Heading>
      <TodoData></TodoData>
      <TodoShowItems todoData={todoData}></TodoShowItems>
    </center>
  );
}

export default App;
