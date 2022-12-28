import { useState } from 'react';

function TodoForm(props) {
  const [title, setTitle] = useState(props.title || '');

  const handleSubmitForm = async e => {
    e.preventDefault();
    if (!title.trim()) {
    } else {
      await props.onSuccess(title);
      setTitle('');
    }
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
