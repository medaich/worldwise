import { useState } from "react";
import styles from "./Login.module.css";

import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className={styles.login}>
      <PageNav />
      <form>
        <label htmlFor="email">Email adresse</label>
        <input
          type="email"
          id="email"
          name="email"
          aria-label="Email address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          name="password"
          aria-label="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button className="cta">Login</button>
          <div>
            <p>Don't have an account yet?</p>
            <Link to="/singup">Sign up &rarr;</Link>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Login;
