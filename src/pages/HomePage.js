import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import { useTodo } from '../contexts/TodoContext';

export default function HomePage() {
  const { todos } = useTodo();
  return (
    <>
      <TodoForm />
      <br />
      <ul className="list-group">
        {todos.map(el => (
          <TodoItem key={el.id} todo={el} />
        ))}
      </ul>
    </>
  );
}
