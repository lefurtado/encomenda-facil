import { api } from ".";

export async function getTipos() {
  const response = await api.get("/tipos");
  return response;
}