import { useQuery } from "@tanstack/react-query";
import { getCity } from "../services/cities";

export function useGetCity(cityId) {
  const {
    error,
    isLoading,
    data: city,
  } = useQuery({
    queryFn: () => getCity(cityId),
    queryKey: ["city", cityId],
    retry: false,
  });

  return { error, isLoading, city };
}
