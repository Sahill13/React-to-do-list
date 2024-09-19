import {useState} from 'react';
function Adding({onNewItem}) {

  const [todoName,setTodoName]=useState();
  const [dueDate,setdueDate]=useState();

  const handleNameChange= (event) => {
    setTodoName(event.target.value);
    
  };

  const handleDateChange= (event) => {
    setdueDate(event.target.value);
  };

  const handleAddbuttonClicked=()=>{
    onNewItem(todoName,dueDate);
    setdueDate("")
    setTodoName("") 
  }

  return (
    <div className="container text-center">
      <div className="row sg-row">
        <div className="col-6">
          <input className="Add-Task" type="text" placeholder="Add a task" value={todoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange}></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success sg-button"  onClick={handleAddbuttonClicked} >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adding;
