import { useQuery } from "@tanstack/react-query";
import { getCities } from "../services/cities";

export function useCities() {
  const {
    data: cities,
    isLoading,
    error,
  } = useQuery({
    queryFn: getCities,
    queryKey: ["cities"],
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
