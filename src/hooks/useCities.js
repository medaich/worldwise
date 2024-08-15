import { useQuery } from "@tanstack/react-query";
import { getCities } from "../services/cities";
import { useAuth } from "../contexts/AuthContext";

export function useCities() {
  const { user } = useAuth();

  const {
    data: cities,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getCities(user.uid),
    queryKey: ["cities", user.uid],
  });

  if (!cities) return { isLoading, error };
  const countries = cities.reduce(function (acc, cur) {
    const country = {
      countryName: cur.country,
      emoji: cur.emoji,
    };
    if (!acc.some((item) => item.countryName === country.countryName))
      return [...acc, country];
    return acc;
  }, []);

  return { cities, isLoading, error, countries };
}
