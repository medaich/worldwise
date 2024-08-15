import { useQuery } from "@tanstack/react-query";
import { getCity } from "../services/cities";
import { useAuth } from "../contexts/AuthContext";

export function useGetCity(cityId) {
  const { user } = useAuth();

  const {
    error,
    isLoading,
    data: city,
  } = useQuery({
    queryFn: () => getCity(user.uid, cityId),
    queryKey: ["city", cityId, user.uid],
    retry: false,
  });

  return { error, isLoading, city };
}
