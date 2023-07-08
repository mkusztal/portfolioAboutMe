import React, { useState } from "react";
import { API_URL } from "../../../config";
import styles from "./Register.module.scss";

export const Register: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [status, setStatus] = useState<string>(""); // null, loading, success, serverError, loginError, clientError

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const user = {
      login,
      password,
      email,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    setStatus("loading");
    fetch(`${API_URL}api/auth/register`, options)
      .then((res) => {
        if (res.status === 201) {
          setStatus("success");
        } else if (res.status === 400) {
          setStatus("clientError");
        } else if (res.status === 409) {
          setStatus("loginError");
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <h1 className={styles.title}>Sign Up</h1>

          {status === "success" && (
            <div className={styles.info}>
              <p>
                You have been successfully registered! You can log in now...
              </p>
            </div>
          )}

          {status === "clientError" && (
            <div className={styles.alert}>
              <p>You have to fill all the fields</p>
            </div>
          )}

          {status === "serverErrors" && (
            <div className={styles.alert}>
              <p>Unexpected error... Try again!</p>
            </div>
          )}

          {status === "loginError" && (
            <div className={styles.alert}>
              <p>You have to use other login</p>
            </div>
          )}

          <p className={styles.subtitle}>
            Please fill in this form to create an account.
          </p>

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

          <div className={styles.input_container}>
            <div className={styles.label}>
              <b>Email</b>
            </div>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type='submit'
            onClick={handleSubmit}
            className={styles.submit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};
