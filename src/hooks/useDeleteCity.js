import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCity as deleteCityApi } from "../services/cities";
import { useAuth } from "../contexts/AuthContext";

export function useDeleteCity() {
  const queryClient = useQueryClient();

  const { user } = useAuth();

  const {
    mutate: deleteCity,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: (cityId) => deleteCityApi(user.uid, cityId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cities", user.uid],
      });
    },
  });

  return { deleteCity, isDeleting, error };
}
