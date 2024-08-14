import styles from "./HomePage.module.css";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className={styles.home}>
      <PageNav />
      <section>
        <h1>
          You travel the world. <br />
          WorldWise keeps track on your advantures.
        </h1>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
      </section>
      <div className={styles.center}>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
