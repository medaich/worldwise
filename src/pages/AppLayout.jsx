import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import SideBar from "../components/SideBar";
import Logo from "../components/Logo";
import AppNav from "../components/AppNav";
import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className={styles.app}>
      <SideBar>
        <Link to="/">
          <Logo />
        </Link>

        <AppNav />
        <section>
          <Outlet />
        </section>
      </SideBar>
      <Map />
    </main>
  );
}

export default AppLayout;
