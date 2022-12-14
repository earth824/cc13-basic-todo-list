function App() {
  return (
    <div className="container pt-5" style={{ maxWidth: 576 }}>
      <form>
        <div className="input-group">
          <input type="text" className="form-control" />
          <button className="btn btn-primary">
            <i className="fa-solid fa-check" />
          </button>
          <button className="btn btn-secondary">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      </form>
      <br />
      <ul className="list-group">
        <li className="list-group-item p-3 text-bg-danger">
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
        </li>
        <li className="list-group-item p-3">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" value="Play game" />
              <button className="btn btn-primary">
                <i className="fa-solid fa-check" />
              </button>
              <button className="btn btn-secondary">
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
          </form>
        </li>
        <li className="list-group-item p-3 text-bg-success">
          <div className="d-flex align-items-center">
            <span className="flex-fill">Meet the dentist</span>
            <div className="btn-group">
              <button className="btn btn-outline-light">
                <i className="fa-solid fa-repeat" />
              </button>
              <button className="btn btn-outline-light">
                <i className="fa-regular fa-trash-can" />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
