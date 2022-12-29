import { createContext, useReducer, useContext, useEffect } from 'react';
import axios from '../config/axios';
import todoReducer, { FETCH_TODO } from '../reducers/todoReducer';

export const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get('/todos');
        dispatch({ type: FETCH_TODO, payload: res.data.todos });
      } catch (err) {
        console.log(err);
      }
    };
    fetchTodo();
  }, []);

  return (
    <TodoContext.Provider value={{ todos: todos }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}

export default TodoContextProvider;
