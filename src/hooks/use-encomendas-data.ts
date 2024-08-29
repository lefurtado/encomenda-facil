import { getEncomendas } from "@/services/encomendas";
import { useQuery } from "react-query";

export function useEncomendasData() {
  const encomendasData = useQuery({
    queryKey: ["encomendas"],
    queryFn: async () => await getEncomendas(),
    refetchOnWindowFocus: false,
  });

  return encomendasData;
}
