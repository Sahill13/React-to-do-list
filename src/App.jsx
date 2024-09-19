import Adding from "./Adding";
import TodoItems from "./todoItems";
import WelcomeMessage from "./WelcomeMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { task: itemName, date: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem=(itemName)=>{
    const newTodoItems= todoItems.filter((item) => item.task !== itemName) ; 
   setTodoItems(newTodoItems)
  }

  return (
    <>
      <center className="todo-container">
        <h1 className="tota">To-Do App</h1>
        <Adding onNewItem={handleNewItem}></Adding>
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} ></TodoItems>
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      </center>
    </>
  );
}
