import styles from "./Logo.module.css";

function Logo({ isResponsive = false }) {
  if (isResponsive)
    return (
      <picture>
        <source media="(min-width:450px)" srcSet="/logo.png" />
        <img className={styles.resLogo} src="/icon.png" alt="logo" />
      </picture>
    );

  return <img className={styles.logo} src="/logo.png" alt="logo" />;
}

export default Logo;
