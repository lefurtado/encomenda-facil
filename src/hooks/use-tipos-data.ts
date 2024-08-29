import { getTipos } from "@/services/tipos";
import { useQuery } from "react-query";

export function useTiposData() {
  const tiposData = useQuery({
    queryKey: ["tipos"],
    queryFn: async () => await getTipos(),
    refetchOnWindowFocus: false,
  });

  return tiposData;
}
