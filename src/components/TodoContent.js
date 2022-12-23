export default function TodoContent() {
  return (
    <div className="d-flex align-items-center">
      <span className="flex-fill">Play game</span>
      <div className="btn-group">
        <button className="btn btn-outline-light">
          <i className="fa-solid fa-repeat" />
        </button>
        <button className="btn btn-outline-light">
          <i className="fa-regular fa-trash-can" />
        </button>
      </div>
    </div>
  );
}
