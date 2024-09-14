import Adding from "./Adding";
import Task from "./Task";
import Task2 from "./Task2";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css' 


export default function App() {
  return (<center className="todo-container">
      <h1 className="tota">To-Do App</h1> 
      <Adding></Adding>
      <div className="items-container">
      <Task></Task>
      <Task2></Task2>.
      </div>
      </center>
  );
}
