import { useTodo } from '../contexts/TodoContext';

export default function TodoContent({ todo: { title, id, completed } }) {
  const { updateTodo, deleteTodo } = useTodo();
  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill">{title}</span>
      <div className="btn-group">
        <button
          className="btn btn-outline-light"
          onClick={() => updateTodo(id, { completed: !completed })}
        >
          <i className="fa-solid fa-repeat" />
        </button>
        <button
          className="btn btn-outline-light"
          onClick={() => deleteTodo(id)}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}
