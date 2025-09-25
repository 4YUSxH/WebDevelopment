import Heading from "./components/Heading";
import TodoData from "./components/TodoData";
import TodoContent from "./components/TodoContent";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Heading></Heading>
      <TodoData></TodoData>
      <div className="item-container">
        <TodoContent></TodoContent>
        <TodoContent></TodoContent>
      </div>
    </center>
  );
}

export default App;
