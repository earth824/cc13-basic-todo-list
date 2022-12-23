import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

export default function TodoItem(props) {
  return (
    <li
      className={`list-group-item p-3 text-bg-${
        props.todo.completed ? 'success' : 'danger'
      }`}
    >
      {/* <TodoForm /> */}
      <TodoContent todo={props.todo} deleteTodo={props.deleteTodo} />
    </li>
  );
}
