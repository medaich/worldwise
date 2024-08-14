import { useEffect, useState } from "react";
import styles from "./Login.module.css";

import PageNav from "../components/PageNav";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  const { user } = useAuth();

  useEffect(
    function () {
      if (user) navigate("/app");
    },
    [user, navigate]
  );

  async function handleSignin(e) {
    e.preventDefault();
    if (!email || !password) return;
    try {
      setIsloading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      setErr("Email or password is incorrect.");
    } finally {
      setIsloading(false);
    }
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form onSubmit={handleSignin}>
        <label htmlFor="email">Email adresse</label>
        <input
          disabled={isLoading}
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
          disabled={isLoading}
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
            <Link to="/signup" disabled={isLoading}>
              Sign up &rarr;
            </Link>
          </div>
        </div>
        {err && <p className="error">{err}</p>}
      </form>
    </main>
  );
}

export default Login;
