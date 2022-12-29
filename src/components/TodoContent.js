import { useTodo } from '../contexts/TodoContext';

export default function TodoContent(props) {
  const ctx = useTodo();
  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill" role="button" onClick={props.openEdit}>
        {props.todo.title}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-outline-light"
          onClick={() =>
            ctx.updateTodo(props.todo.id, {
              title: props.todo.title,
              completed: !props.todo.completed
            })
          }
        >
          <i className="fa-solid fa-repeat" />
        </button>
        <button
          className="btn btn-outline-light"
          onClick={() => ctx.deleteTodo(props.todo.id)}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}
