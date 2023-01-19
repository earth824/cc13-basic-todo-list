import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function LoginPage() {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      // 1. validate input
      // 2. sent request to server
      const res = await axios.post('http://localhost:8013/auth/login', input);
      login();
      // setItem: add value to localstorage
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="email"
          onChange={handleChangeInput}
          value={input.email}
          name="email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="text"
          className="form-control"
          id="password"
          onChange={handleChangeInput}
          value={input.password}
          name="password"
        />
      </div>
      <button className="btn btn-primary">Login</button>
    </form>
  );
}
