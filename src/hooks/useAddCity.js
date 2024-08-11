import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCity as addCityApi } from "../services/cities";
import { useNavigate } from "react-router-dom";

export function useAddCity() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: addCity,
    isPending,
    error,
  } = useMutation({
    mutationFn: addCityApi,
    onSuccess: (city) => {
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
      navigate(`/app/cities/`);
    },
  });

  return { addCity, isPending, error };
}
