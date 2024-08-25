import { api } from ".";

export async function getBlocos() {
  const response = await api.get("/blocos");
  return response;
}