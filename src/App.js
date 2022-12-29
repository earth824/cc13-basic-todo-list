import { useContext } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { TodoContext } from './contexts/TodoContext';

function App() {
  const ctx = useContext(TodoContext);

  return (
    <div className="container py-5" style={{ maxWidth: 576 }}>
      <TodoForm onConfirm={ctx.createTodo} />
      <br />
      <ul className="list-group">
        {ctx.todos.map(el => (
          <TodoItem key={el.id} todo={el} />
        ))}
      </ul>
    </div>
  );
}

export default App;
