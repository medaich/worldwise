import styles from "./City.module.css";
import { formatDate } from "../utils/helpers";
import Spinner from "./Spinner";
import Message from "./Message";

import { useParams } from "react-router-dom";
import { useGetCity } from "../hooks/useGetCity";
import BackButton from "./BackButton";

function City() {
  const { id } = useParams();

  const { error, isLoading, city } = useGetCity(id);

  if (isLoading) return <Spinner />;

  if (error) return <Message message={error.message} />;

  const { cityName, date, emoji, notes } = city;
  const wikiUrl = `https://en.wikipedia.org/wiki/${cityName.replace(" ", "_")}`;

  return (
    <div className={styles.city}>
      <p className={styles.label}>city name</p>
      <p>
        <span>{emoji}</span>
        <span>{cityName}</span>
      </p>
      <p className={styles.label}>You went to {cityName} on</p>
      <time>{formatDate(date, { weekday: "long" })}</time>
      {notes && (
        <>
          <p className={styles.label}>Your notes</p>
          <p>{notes}</p>
        </>
      )}
      <p className={styles.label}>learn more</p>
      <a
        className={styles.wiki}
        href={wikiUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        Check out {cityName} on wekipedia &rarr;
      </a>
      <BackButton />
    </div>
  );
}

export default City;
