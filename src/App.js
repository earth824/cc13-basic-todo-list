import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';
import Layout from './components/Layout';
import { useAuth } from './contexts/AuthContext';
import TodoContextProvider from './contexts/TodoContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const publicRoute = [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '*', element: <Navigate to="/login" /> }
];

const protectRoute = [
  {
    path: '/',
    element: (
      <TodoContextProvider>
        <HomePage />
      </TodoContextProvider>
    )
  },
  { path: '*', element: <Navigate to="/" /> }
];

function App() {
  const { isLogged } = useAuth();
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: isLogged ? protectRoute : publicRoute
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
