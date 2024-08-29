import { getBlocos } from "@/services/blocos";
import { useQuery } from "react-query";

export function useBlocosData() {
  const blocosData = useQuery({
    queryKey: ["blocos"],
    queryFn: async () => await getBlocos(),
    refetchOnWindowFocus: false,
  });

  return blocosData;
}
