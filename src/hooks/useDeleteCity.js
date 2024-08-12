import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCity as deleteCityApi } from "../services/cities";

export function useDeleteCity() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteCity,
    isPending: isDeleting,
    error,
  } = useMutation({
    mutationFn: deleteCityApi,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
    },
  });

  return { deleteCity, isDeleting, error };
}
