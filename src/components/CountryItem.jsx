import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { countryName, emoji } = country;
  return (
    <li className={styles.country}>
      <span>{emoji}</span>
      <span>{countryName}</span>
    </li>
  );
}

export default CountryItem;
