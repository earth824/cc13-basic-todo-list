import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/register', element: <RegisterPage /> }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
