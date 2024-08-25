import { api } from ".";

export async function getMoradores() {
  const response = await api.get("/moradores");
  return response;
}