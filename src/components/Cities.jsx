import { useCities } from "../hooks/useCities";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

function Cities() {
  const { isLoading, cities, error } = useCities();

  if (isLoading) return <Spinner />;

  if (error) return <Message message={error.message} />;

  if (cities?.length === 0)
    return <Message message="Start adding cities by clicking the map." />;

  return (
    <ul>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default Cities;
