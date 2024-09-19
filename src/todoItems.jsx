import Task from './Task';

const TodoItems = ({ todoItems ,onDeleteClick }) => {
  return (
    <>
      {todoItems.map((item, index) => (
        <Task todoName={item.task} dueDate={item.date} key={index} onDeleteClick={onDeleteClick} />
      ))}
    </>
  );
};

export default TodoItems;
