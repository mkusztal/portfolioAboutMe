import React, { useState } from "react";
import { API_URL } from "../../../config";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/userRedux";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

export const Login: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const user = {
      login,
      password,
    };

    const options: RequestInit = {
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
      .catch((err: string) => {
        setStatus("serverError: " + err);
      });
  };

  return (
    <section className={styles.root}>
      <form className={styles.form}>
        <div className={styles.container}>
          <h1 className={styles.title}>Sign In</h1>

          {status === "success" && (
            <div className={styles.info}>
              <p>You have been successfully logged!</p>
            </div>
          )}

          {status === "clientError" && (
            <div className={styles.alert}>
              <p>Login or password are incorrect!</p>
            </div>
          )}

          {status === "serverErrors" && (
            <div className={styles.alert}>
              <p>Unexpected error... Try again!</p>
            </div>
          )}

          <div className={styles.input_container}>
            <div className={styles.label}>
              <b>Login</b>
            </div>
            <input
              type='text'
              placeholder='Enter Login'
              name='login'
              id='login'
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
              type='password'
              placeholder='Enter Password'
              name='psw'
              id='psw'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type='submit'
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
