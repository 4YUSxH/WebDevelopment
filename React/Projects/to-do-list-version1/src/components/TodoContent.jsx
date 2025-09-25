function TodoContent() {
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">Buy Milk</div>
        <div className="col-4">04/09/2025</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger my-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoContent;
