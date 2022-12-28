import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import SearchForm from './components/SearchForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const updateShowTodos = searchTerm => {
    setShowTodos(
      todos.filter(el =>
        el.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:8080/todos');
    setTodos(res.data.todos);
    setShowTodos(res.data.todos);
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
    setTrigger(!trigger);
  };

  const updateTodo = async (updateValue, id) => {
    await axios.put('http://localhost:8080/todos/' + id, updateValue);
    fetchTodos();
    setTrigger(!trigger);
  };

  const deleteTodo = async id => {};

  return (
    <div className="container py-5" style={{ maxWidth: 576 }}>
      <TodoForm onSuccess={createTodo} />
      <br />
      <SearchForm updateShowTodos={updateShowTodos} trigger={trigger} />
      <br />
      <ul className="list-group">
        {showTodos.map(el => (
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
