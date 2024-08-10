import styles from "./CityItem.module.css";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";

function CityItem({ city }) {
  const { cityName, emoji, date, id } = city;

  return (
    <li>
      <Link className={styles.city} to={`${id}`}>
        <p>
          <span>{emoji}</span>
          <span>{cityName}</span>
        </p>

        <div>
          <time>({formatDate(date)})</time>
          <button>&times;</button>
        </div>
      </Link>
    </li>
  );
}

export default CityItem;
