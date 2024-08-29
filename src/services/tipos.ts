import { Tipo } from "@/types/tipo";
import { api } from ".";

export const getTipos = async (): Promise<Tipo[]> => {
  const response = await api.get<Tipo[]>("/tipos");
  return response.data;
};
