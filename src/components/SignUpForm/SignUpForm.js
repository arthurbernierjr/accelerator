import React, { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import styles from './SignUpForm.module.scss';

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirm: '',
  });
  const [error, setError] = useState('');

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
    setError('');
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { userName, email, password } = formData;
      const user = await signUp({ userName, email, password });
      setUser(user);
    } catch {
      setError('Sign Up Failed - Try Again');
    }
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div className={styles.SignUpForm}>
      <h2>Enter Your Details Below To Sign Up</h2>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>User Name</label>
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </div>
  );
}
