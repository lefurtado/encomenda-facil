import { getMoradores } from "@/services/moradores";
import { useQuery } from "react-query";

export function useMoradoresData() {
  const moradoresData = useQuery({
    queryKey: ["moradores"],
    queryFn: async () => await getMoradores(),
    refetchOnWindowFocus: false,
  });

  return moradoresData;
}
