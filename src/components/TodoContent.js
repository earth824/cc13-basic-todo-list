export default function TodoContent(props) {
  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill" role="button" onClick={props.openEdit}>
        {props.todo.title}
      </span>
      <div className="btn-group">
        <button
          className="btn btn-outline-light"
          onClick={() =>
            props.updateTodo(props.todo.id, {
              completed: !props.todo.completed
            })
          }
        >
          <i className="fa-solid fa-repeat" />
        </button>
        <button
          className="btn btn-outline-light"
          onClick={() => props.deleteTodo(props.todo.id)}
        >
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}
