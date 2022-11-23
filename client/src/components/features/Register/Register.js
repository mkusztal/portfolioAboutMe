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

    const fd = new FormData();
    fd.append('login', login);
    fd.append('password', password);
    fd.append('email', email);

    const options = {
      method: 'POST',
      body: fd,
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
    <form>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label for="psw-repeat">
          <b>Login</b>
        </label>
        <input
          type="text"
          placeholder="Enter Login"
          name="login"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className={styles.registerbtn}
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
