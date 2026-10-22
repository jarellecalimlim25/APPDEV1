
import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.hello}>Hello,</span>{" "}
        <span className={styles.guyss}>Everyone!</span>
      </h1>

      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tab} ${
            activeTab === "login" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>

        <button
          type="button"
          className={`${styles.tab} ${
            activeTab === "signup" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("signup")}
        >
          SignUp
        </button>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter your email"
          aria-label="Email"
          required
        />

        <input
          className={styles.input}
          type="password"
          placeholder={
            activeTab === "login"
              ? "Enter Password"
              : "Create Password"
          }
          aria-label="Password"
          minLength={6}
          required
        />

        <button className={styles.submitButton} type="submit">
          {activeTab === "login" ? "Login" : "SignUp"}
        </button>
      </form>

        <p>or</p>

      <div className={styles.socials}>
        <button
          className={styles.googleButton}
          type="button"
          aria-label="Google"
        >
          <span className={styles.googleIcon}>G</span>
        </button>

        <button
          className={styles.facebookButton}
          type="button"
          aria-label="Facebook"
        >
          f
        </button>
      </div>
    </div>
  );
}

export default Login;
