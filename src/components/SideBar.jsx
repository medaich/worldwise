import styles from "./SideBar.module.css";

function SideBar({ children }) {
  return <aside className={styles.sidebar}>{children}</aside>;
}

export default SideBar;
