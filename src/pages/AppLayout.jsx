import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import SideBar from "../components/SideBar";
import Logo from "../components/Logo";
import AppNav from "../components/AppNav";
import { Link, Outlet } from "react-router-dom";
import User from "../components/User";

function AppLayout() {
  return (
    <main className={styles.app} id="app">
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
      <User />
    </main>
  );
}

export default AppLayout;
