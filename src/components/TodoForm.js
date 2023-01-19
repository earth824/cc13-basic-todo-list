import { useState } from 'react';
import axios from 'axios';

function TodoForm() {
  const [title, setTitle] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    // 1. validate
    // 2. set request to server
    axios.post(
      'http://localhost:8013/todos',
      { title },
      {
        headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
      }
    );
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
