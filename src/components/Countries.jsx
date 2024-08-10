import styles from "./Countries.module.css";

import { useCities } from "../hooks/useCities";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";

function Countries() {
  const { isLoading, countries, error } = useCities();

  if (isLoading) return <Spinner />;

  if (error) return <Message message={error.message} />;

  if (countries?.length === 0)
    return <Message message="Start adding countries by clicking the map." />;

  return (
    <ul className={styles.countries}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.countryName} />
      ))}
    </ul>
  );
}

export default Countries;
