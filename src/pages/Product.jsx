import styles from "./Pricing.module.css";

import PageNav from "../components/PageNav";

function Pricing() {
  return (
    <main className={styles.pricing} id="pricing">
      <PageNav />
      <section>
        <div className="content">
          <h1>About WorldWise</h1>

          <p>
            WorldWise is your personal travel companion. Log your journeys, add
            notes about your favorite spots, and watch your world map fill up
            with memories. Whether you're a seasoned globetrotter or just
            starting your travel adventures, WorldWise helps you celebrate every
            destination
          </p>
        </div>

        <div className="img-box">
          <img src="/img-product.webp" alt="product" />
        </div>
      </section>
    </main>
  );
}

export default Pricing;
