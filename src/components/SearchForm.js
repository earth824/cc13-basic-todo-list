import { useState, useEffect } from 'react';

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    props.updateShowTodos(searchTerm);
  }, [props.trigger]);

  useEffect(() => {
    const id = setTimeout(() => {
      props.updateShowTodos(searchTerm);
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  }, [searchTerm]);

  const handleChangeSearchTerm = e => {
    setSearchTerm(e.target.value.trim());
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={handleChangeSearchTerm}
      />
      <button className="btn btn-warning">
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}
