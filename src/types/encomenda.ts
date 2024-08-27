export interface Encomenda {
  id: string;
  idMorador: number;
  idBloco: number;
  apartamento: string;
  dataChegada: string;
  idTipo: number;
  detalhes: string;
  status: "retirado" | "pendente" | "rejeitado";
};