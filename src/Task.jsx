function Task({ todoName, dueDate ,onDeleteClick }) {
  return (
    <div className="container">
      <div className="row sg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sg-button" onClick={()=>onDeleteClick(todoName)} >Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Task;
