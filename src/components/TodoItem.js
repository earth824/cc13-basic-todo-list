import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

export default function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const openEdit = () => setIsEdit(true);
  const closeEdit = () => setIsEdit(false);

  const onSuccessEdit = async title => {
    await props.updateTodo(
      { title, completed: props.todo.completed },
      props.todo.id
    );
    closeEdit();
  };

  return (
    <li
      className={`list-group-item p-3 text-bg-${
        props.todo.completed ? 'success' : 'danger'
      }`}
    >
      {isEdit ? (
        <TodoForm onSuccess={onSuccessEdit} title={props.todo.title} />
      ) : (
        <TodoContent todo={props.todo} openEdit={openEdit} />
      )}
    </li>
  );
}
