export default function LoginPage() {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input type="text" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input type="text" className="form-control" id="password" />
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
}
