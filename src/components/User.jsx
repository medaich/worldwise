import styles from "./User.module.css";

import { signOut } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../services/firebase";

function User() {
  const { user } = useAuth();

  async function handleLogout() {
    const isLogout = window.confirm("Are you sure you want to log out?");

    if (!isLogout) return;

    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  if (user)
    return (
      <div className={styles.user}>
        {user.displayName && (
          <p>{`Welcome, ${user.displayName.split(" ").at(0)}`}</p>
        )}
        <button onClick={handleLogout}>Log out</button>
      </div>
    );

  return null;
}

export default User;
