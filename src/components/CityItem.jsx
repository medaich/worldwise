import styles from "./CityItem.module.css";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useDeleteCity } from "../hooks/useDeleteCity";

function CityItem({ city }) {
  const { cityName, emoji, date, id, position: { lat, lng } = {} } = city;

  const { deleteCity, isDeleting } = useDeleteCity();

  function handleRemove(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link className={styles.city} to={`${id}?lat=${lat}&lng=${lng}`}>
        <p>
          <span>{emoji}</span>
          <span>{cityName}</span>
        </p>

        <div>
          <time>({formatDate(date)})</time>
          <button disabled={isDeleting} onClick={handleRemove}>
            &times;
          </button>
        </div>
      </Link>
    </li>
  );
}

export default CityItem;
