import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Layout() {
  const { isLogged, logout } = useAuth();
  const navigate = useNavigate();
  const handleClickLogout = () => {
    localStorage.removeItem('token');
    logout();
    navigate('/login');
  };

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
            {isLogged ? (
              <>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <button
                  className="btn nav-link border-0"
                  onClick={handleClickLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
      <div className="container py-5" style={{ maxWidth: 576 }}>
        <Outlet />
      </div>
    </>
  );
}
