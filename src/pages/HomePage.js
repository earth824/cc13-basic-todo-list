import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

export default function HomePage() {
  return (
    <>
      <TodoForm />
      <br />
      <ul className="list-group">
        <TodoItem />
      </ul>
    </>
  );
}
