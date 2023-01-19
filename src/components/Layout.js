import { Outlet, Link, NavLink } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Todo App
          </Link>
        </div>

        <div className="navbar-collapse collapse">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="container py-5" style={{ maxWidth: 576 }}>
        <Outlet />
      </div>
    </>
  );
}
