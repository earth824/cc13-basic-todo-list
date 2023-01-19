import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      // 1. validate input
      // 2. sent request to register
      await axios.post('http://localhost:8013/auth/register', input);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
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

      <div className="mb-3">
        <label className="form-label" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          type="text"
          className="form-control"
          id="confirmPassword"
          onChange={handleChangeInput}
          value={input.confirmPassword}
          name="confirmPassword"
        />
      </div>

      <button className="btn btn-primary">Register</button>
    </form>
  );
}
