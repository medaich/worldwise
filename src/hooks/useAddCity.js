import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCity as addCityApi } from "../services/cities";
import { useNavigate } from "react-router-dom";
import { useCurrCity } from "../contexts/CurrCityContext";

export function useAddCity() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setCurrId } = useCurrCity();

  const {
    mutate: addCity,
    isPending,
    error,
  } = useMutation({
    mutationFn: addCityApi,
    onSuccess: async (city) => {
      await queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
      navigate(`/app/cities?curr=${city.id}`);
      setCurrId(city.id);
    },
  });

  return { addCity, isPending, error };
}
