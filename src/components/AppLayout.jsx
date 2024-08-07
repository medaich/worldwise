import styles from "./AppLayout.module.css";
import Logo from "./Logo";

function AppLayout() {
  return (
    <main className={styles.app}>
      <Logo />
    </main>
  );
}

export default AppLayout;
