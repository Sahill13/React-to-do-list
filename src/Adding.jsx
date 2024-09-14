function Adding() {
  return (
    <div className="container text-center">
      <div className="row sg-row">
        <div className="col-6">
          <input className="Add-Task" type="text" placeholder="Add a task" />
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success sg-button">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adding;
