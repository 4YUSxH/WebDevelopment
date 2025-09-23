function TodoData() {
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-2">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-primary my-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoData;
