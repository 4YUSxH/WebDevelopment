import { useState } from "react"

function TodoData({onNewItem}) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (dets) => {
    setTodoName(dets.target.value)
  }
  const handleDateChange = (dets) => {
    setDueDate(dets.target.value)
  }

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }
  
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/>
        </div>
        <div className="col-2">
          <input type="date" name="" id="" value={dueDate} onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-primary my-button" onClick={handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoData;
