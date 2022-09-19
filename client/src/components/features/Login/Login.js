import { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { API_URL } from '../../../config';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/userRedux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); // null, loading, success, serverError, clientError

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ login, password }),
    };

    setStatus('loading');
    fetch(`${API_URL}api/auth/login`, options)
      .then((res) => {
        if (res.status === 200) {
          setStatus('success');
          dispatch(logIn({ login }));
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else if (res.status === 400) {
          setStatus('clientError');
        } else {
          setStatus('serverError');
        }
      })
      .catch((err) => {
        setStatus('serverError');
      });
  };

  return (
    <Form className="col-12 col-sm-4 mx-auto" onSubmit={handleSubmit}>
      <h1 className="my-4">Login</h1>

      {status === 'success' && (
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>You have been successfully logged!</p>
        </Alert>
      )}

      {status === 'serverError' && (
        <Alert variant="danger">
          <Alert.Heading>Something went wrong... </Alert.Heading>
          <p>Unexpected error... Try again!</p>
        </Alert>
      )}

      {status === 'clientError' && (
        <Alert variant="danger">
          <Alert.Heading>Incorrect data</Alert.Heading>
          <p>Login or password are incorrect...</p>
        </Alert>
      )}

      {status === 'loading' && (
        <Spinner animation="border" role="status" className="d-block mx-auto">
          <span className="visually-hidden"></span>
        </Spinner>
      )}

      {status !== 'success' && (
        <Form.Group>
          <Form.Group className="mb-3" controlId="formLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Enter login"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form.Group>
      )}
    </Form>
  );
};

export default Login;
