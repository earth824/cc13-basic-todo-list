import { useState } from 'react';
import axios from 'axios';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
  const [title, setTitle] = useState('');
  const { createTodo } = useTodo();

  const handleSubmitForm = e => {
    e.preventDefault();
    // 1. validate
    // 2. set request to server
    createTodo(title);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button className="btn btn-primary">
          <i className="fa-solid fa-check" />
        </button>
        <button className="btn btn-secondary">
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
