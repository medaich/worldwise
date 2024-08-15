import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCity as addCityApi } from "../services/cities";
import { useNavigate } from "react-router-dom";
import { useCurrCity } from "../contexts/CurrCityContext";
import { useAuth } from "../contexts/AuthContext";

export function useAddCity() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setCurrId } = useCurrCity();

  const { user } = useAuth();

  const {
    mutate: addCity,
    isPending,
    error,
  } = useMutation({
    mutationFn: (newCity) => addCityApi(user.uid, newCity),
    onSuccess: async (city) => {
      await queryClient.invalidateQueries({
        queryKey: ["cities", user.uid],
      });
      navigate(`/app/cities?curr=${city.id}`);
      setCurrId(city.id);
    },
  });

  return { addCity, isPending, error };
}
