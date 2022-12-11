import { useState } from "react";
import { API_URL } from "../../../config";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/userRedux";
import { useNavigate } from "react-router-dom";
import styles from "../Register/Register.module.scss";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null); // null, loading, success, serverError, clientError

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      login,
      password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    };

    setStatus("loading");
    fetch(`${API_URL}api/auth/login`, options)
      .then((res) => {
        if (res.status === 200) {
          setStatus("success");
          dispatch(logIn({ login }));
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else if (res.status === 400) {
          setStatus("clientError");
        } else {
          setStatus("serverError");
        }
      })
      .catch((err) => {
        setStatus("serverError");
      });
  };

  return (
    <section className={styles.root}>
      <form className={styles.form}>
        <div className={styles.container}>
          <h1 className={styles.title}>Sign In</h1>

          {status === "success" && (
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
          <button
            type="submit"
            className={styles.submit}
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
