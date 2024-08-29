import { Morador } from "@/types/morador";
import { api } from ".";

export const getMoradores = async (): Promise<Morador[]> => {
  const response = await api.get<Morador[]>("/moradores");
  return response.data;
};
