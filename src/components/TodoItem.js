import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

export default function TodoItem({ todo }) {
  return (
    <li
      className={`list-group-item p-3 text-bg-${
        todo.completed ? 'success' : 'danger'
      }`}
    >
      {/* <TodoForm /> */}
      <TodoContent todo={todo} />
    </li>
  );
}
