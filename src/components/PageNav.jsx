import { Link, NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo isResponsive={true} />
      </Link>
      <ul>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>

        <li className="cta">
          <NavLink to="/login">login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
