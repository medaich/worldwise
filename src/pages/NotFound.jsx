import BackButton from "../components/BackButton";
import PageNav from "../components/PageNav";
import styles from "./NotFound.module.css";
function NotFound() {
  return (
    <div className={styles.notFound}>
      <PageNav />

      <div>
        <p>The page you're looking for couldn't be found</p>
        <BackButton />
      </div>
    </div>
  );
}

export default NotFound;
