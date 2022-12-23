import TodoForm from './TodoForm';
import TodoContent from './TodoContent';
import { useState } from 'react';

export default function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const openEdit = () => setIsEdit(true);
  const closeEdit = () => setIsEdit(false);

  return (
    <li
      className={`list-group-item p-3 text-bg-${
        props.todo.completed ? 'success' : 'danger'
      }`}
    >
      {isEdit ? (
        <TodoForm
          closeEdit={closeEdit}
          todo={props.todo}
          updateTodo={props.updateTodo}
        />
      ) : (
        <TodoContent
          todo={props.todo}
          deleteTodo={props.deleteTodo}
          updateTodo={props.updateTodo}
          openEdit={openEdit}
        />
      )}
    </li>
  );
}
