export default function RegisterPage() {
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

      <div className="mb-3">
        <label className="form-label" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input type="text" className="form-control" id="confirmPassword" />
      </div>

      <button className="btn btn-primary">Register</button>
    </form>
  );
}
