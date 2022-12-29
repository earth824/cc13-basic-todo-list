import { createContext, useReducer, useContext, useEffect } from 'react';
import axios from '../config/axios';
import todoReducer, {
  FETCH_TODO,
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from '../reducers/todoReducer';

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

  const createTodo = async title => {
    try {
      const res = await axios.post('/todos', {
        title: title,
        completed: false
      });
      dispatch({ type: CREATE_TODO, payload: res.data.todo });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async id => {
    try {
      await axios.delete(`/todos/${id}`);
      dispatch({ type: DELETE_TODO, payload: id });
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = async (id, updateValue) => {
    try {
      await axios.put(`/todos/${id}`, updateValue);
      dispatch({
        type: UPDATE_TODO,
        payload: { id: id, updateValue: updateValue }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        createTodo: createTodo,
        deleteTodo: deleteTodo,
        updateTodo: updateTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext);
}

export default TodoContextProvider;
