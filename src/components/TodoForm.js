import { useState } from 'react';

//CREATE <TodoForm onConfirm={createFunction} onCancel={cancelCreate} />
//UPDATE <TodoForm onConfirm={updateFunction} onCancel={cancelUpdate} />

function TodoForm(props) {
  const [title, setTitle] = useState(props.title || '');
  const [error, setError] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    if (!title.trim()) {
      setError('title is required.');
    } else {
      props.onConfirm(title);
      setTitle('');
      setError('');
    }
  };

  const handleClickX = () => {
    setTitle('');
    setError('');
    props.onCancel?.();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="input-group">
        <input
          type="text"
          className={`form-control ${error ? 'is-invalid' : ''}`}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button className="btn btn-primary">
          <i className="fa-solid fa-check" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClickX}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      {error && <small className="text-danger">{error}</small>}
    </form>
  );
}

export default TodoForm;
