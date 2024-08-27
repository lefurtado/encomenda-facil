import { api } from ".";

export async function getEncomendas() {
  const response = await api.get("/encomendas");
  return response;
}