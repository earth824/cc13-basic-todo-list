import { useContext } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoContextProvider, { TodoContext } from './contexts/TodoContext';

function App() {
  const ctx = useContext(TodoContext);
  return (
    <TodoContextProvider>
      <div className="container py-5" style={{ maxWidth: 576 }}>
        <TodoForm />
        <br />
        <ul className="list-group">
          {ctx.todos.map(el => (
            <TodoItem key={el.id} todo={el} />
          ))}
        </ul>
      </div>
    </TodoContextProvider>
  );
}

export default App;
