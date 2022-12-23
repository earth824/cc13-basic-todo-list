import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="container py-5" style={{ maxWidth: 576 }}>
      <TodoForm />
      <br />
      <ul className="list-group">
        <TodoItem />
      </ul>
    </div>
  );
}

export default App;
