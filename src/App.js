import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import SearchForm from './components/SearchForm';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:8080/todos');
    setTodos(res.data.todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async title => {
    const res = await axios.post('http://localhost:8080/todos', {
      title,
      completed: false
    });
    setTodos([res.data.todo, ...todos]);
  };

  const updateTodo = async (updateValue, id) => {
    await axios.put('http://localhost:8080/todos/' + id, updateValue);
    fetchTodos();
  };

  const deleteTodo = async id => {};

  return (
    <div className="container py-5" style={{ maxWidth: 576 }}>
      <TodoForm onSuccess={createTodo} />
      <br />
      <SearchForm />
      <br />
      <ul className="list-group">
        {todos.map(el => (
          <TodoItem
            key={el.id}
            todo={el}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
