import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>Disclaimer:</span> This project is for demonstration purposes
        only. You are free to use any fake or non-real data when using the app,
        as no email verification or personal information is required. This data
        will not be used beyond the scope of this demo.
      </p>
      <p>
        <span> Privacy Notice:</span> Any data entered into this app is stored
        temporarily and is not used for any real-world purposes. The data will
        not be shared with third parties and will be deleted upon request. If
        you have any concerns, please contact mohammedaich.dev@gmail.com.
      </p>
      <p>&copy; Worldwise medaich {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
