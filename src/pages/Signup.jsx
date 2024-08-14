import { useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import BackButton from "../components/BackButton";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const IS_NOT_CONFIRMED_MSG = "passwords must match";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isConfirmed = password === confirmPassword;

  const navigate = useNavigate();

  const { user } = useAuth();

  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    if (user) navigate("/app"); // if the user signed up and tried to re-sign up because of some network problem.

    if (!isConfirmed) {
      setError(IS_NOT_CONFIRMED_MSG);
      return;
    }

    if (!email || !password) return;
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (name)
        await updateProfile(userCredential.user, {
          displayName: name,
        });

      navigate("/app");
    } catch (err) {
      console.error(err);
      setError("Couldn't sign up, try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form onSubmit={handleSignup}>
        <label htmlFor="name">Full Name</label>
        <input
          disabled={isLoading}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          required
        />
        <label htmlFor="pass">Password</label>
        <input
          disabled={isLoading}
          type="password"
          id="pass"
          name="password"
          aria-label="Enter your password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPass">Confirm Password</label>
        <input
          disabled={isLoading}
          type="password"
          id="confirmPass"
          name="password"
          aria-label="Confirm your password"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error === IS_NOT_CONFIRMED_MSG && (
          <p className="error" style={{ marginTop: "0" }}>
            {error}
          </p>
        )}
        <div>
          <button className="cta" disabled={isLoading}>
            Sign up
          </button>
          <BackButton />
        </div>
        {error && error !== IS_NOT_CONFIRMED_MSG && (
          <p className="error">error</p>
        )}
      </form>
    </main>
  );
}

export default Signup;
