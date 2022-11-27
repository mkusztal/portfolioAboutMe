import { useState } from 'react';
import { API_URL } from '../../../config';
import styles from './Register.module.scss';

const Register = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [status, setStatus] = useState(null); // null, loading, success, serverError, loginError, clientError

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      login,
      password,
      email,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    setStatus('loading');
    fetch(`${API_URL}api/auth/register`, options)
      .then((res) => {
        if (res.status === 201) {
          setStatus('success');
        } else if (res.status === 400) {
          setStatus('clientError');
        } else if (res.status === 409) {
          setStatus('loginError');
        } else {
          setStatus('serverError');
        }
      })
      .catch((err) => {
        setStatus('serverError: ', err);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.subtitle}>
          Please fill in this form to create an account.
        </p>

        {status === 'success' && (
          <div>
            <p>You have been successfully logged!</p>
          </div>
        )}

        <div className={styles.input_container}>
          <div className={styles.label}>
            <b>Login</b>
          </div>
          <input
            type="text"
            placeholder="Enter Login"
            name="login"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>

        <div className={styles.input_container}>
          <div className={styles.label}>
            <b>Password</b>
          </div>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.input_container}>
          <div className={styles.label}>
            <b>Email</b>
          </div>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.submit}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Register;
