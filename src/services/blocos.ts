import { api } from ".";
import { Bloco } from "@/types/bloco";

export const getBlocos = async (): Promise<Bloco[]> => {
  const response = await api.get<Bloco[]>("/blocos");
  return response.data;
};
