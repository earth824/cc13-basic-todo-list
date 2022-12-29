import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoContent from './TodoContent';
import { useTodo } from '../contexts/TodoContext';

export default function TodoItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const ctx = useTodo();

  const openEdit = () => setIsEdit(true);
  const closeEdit = () => setIsEdit(false);

  const handleUpdateTodoForm = title => {
    ctx.updateTodo(props.todo.id, {
      title: title,
      completed: props.todo.completed
    });
    closeEdit();
  };

  return (
    <li
      className={`list-group-item p-3 text-bg-${
        props.todo.completed ? 'success' : 'danger'
      }`}
    >
      {isEdit ? (
        <TodoForm
          title={props.todo.title}
          onCancel={closeEdit}
          onConfirm={handleUpdateTodoForm}
        />
      ) : (
        <TodoContent todo={props.todo} openEdit={openEdit} />
      )}
    </li>
  );
}
