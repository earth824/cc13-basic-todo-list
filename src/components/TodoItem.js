import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

export default function TodoItem() {
  return (
    <li className="list-group-item p-3 text-bg-success">
      {/* <TodoForm /> */}
      <TodoContent />
    </li>
  );
}
