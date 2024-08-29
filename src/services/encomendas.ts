import { api } from ".";
import { Encomenda } from "@/types/encomenda";

export const getEncomendas = async (): Promise<Encomenda[]> => {
  const response = await api.get<Encomenda[]>("/encomendas");
  return response.data;
};
