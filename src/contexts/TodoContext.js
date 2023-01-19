import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get('http://localhost:8013/todos', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setTodos(res.data.todos);
    };
    fetchTodo();
  }, []);

  const createTodo = async title => {
    const res = await axios.post(
      'http://localhost:8013/todos',
      { title },
      {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
      }
    );
    const newTodos = [res.data.todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = async (id, value) => {
    await axios.put(`http://localhost:8013/todos/${id}`, value, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    const newTodos = todos.map(el => (el.id === id ? { ...el, ...value } : el));
    setTodos(newTodos);
  };

  const deleteTodo = async id => {
    await axios.delete(`http://localhost:8013/todos/${id}`, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    const newTodos = todos.filter(el => el.id !== id);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, createTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}
