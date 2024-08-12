import styles from "./Pricing.module.css";

import PageNav from "../components/PageNav";

function Pricing() {
  return (
    <main className={styles.pricing} id="pricing">
      <PageNav />
      <section>
        <div className="content">
          <h1>
            Simple pricing. <br />
            Just $9/month.
          </h1>

          <p>
            Track your world adventures with ease. WorldWise helps you remember
            every city you've explored, with just a few clicks. Keep your travel
            memories organized and visualized on a beautiful, interactive map
          </p>
        </div>

        <div className="img-box">
          <img src="/img-pricing.webp" alt="pricing" />
        </div>
      </section>
    </main>
  );
}

export default Pricing;
