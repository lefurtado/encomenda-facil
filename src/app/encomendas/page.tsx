import { columns, Encomenda } from "./columns";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DataTable } from "@/components/ui/data-table";
import DialogNewTransaction from "@/components/core/dialog-new-package";

const encomendas: Encomenda[] = [
  {
    id: 1,
    moradorNome: "João Silva",
    idMorador: "1",
    bloco: "A",
    apartamento: "101",
    dataChegada: new Date("2024-08-20 14:30"),
    tipo: "1",
    detalhes: "Pacote da Amazon",
    status: "rejeitado",
  },
  {
    id: 2,
    moradorNome: "Maria Oliveira",
    idMorador: "2",
    bloco: "B",
    apartamento: "202",
    dataChegada: new Date("2024-08-20 15:00"),
    tipo: "2",
    detalhes: "Caixa do Mercado Livre",
    status: "retirado",
  },
  {
    id: 3,
    moradorNome: "Carlos Pereira",
    idMorador: "3",
    bloco: "C",
    apartamento: "303",
    dataChegada: new Date("2024-08-21 09:45"),
    tipo: "5",
    detalhes: "Envelope dos Correios",
    status: "pendente",
  },
  {
    id: 4,
    moradorNome: "Ana Costa",
    idMorador: "4",
    bloco: "D",
    apartamento: "404",
    dataChegada: new Date("2024-08-21 11:20"),
    tipo: "4",
    detalhes: "Pacote do AliExpress",
    status: "retirado",
  },
  {
    id: 5,
    moradorNome: "Pedro Almeida",
    idMorador: "5",
    bloco: "A",
    apartamento: "105",
    dataChegada: new Date("2024-08-21 12:15"),
    tipo: "3",
    detalhes: "Caixa da Shopee",
    status: "pendente",
  },
  {
    id: 6,
    moradorNome: "Fernanda Lima",
    idMorador: "6",
    bloco: "B",
    apartamento: "206",
    dataChegada: new Date("2024-08-21 13:10"),
    tipo: "5",
    detalhes: "Envelope com documentos",
    status: "retirado",
  },
  {
    id: 7,
    moradorNome: "Lucas Souza",
    idMorador: "7",
    bloco: "C",
    apartamento: "307",
    dataChegada: new Date("2024-08-21 14:25"),
    tipo: "6",
    detalhes: "Pacote do Submarino",
    status: "pendente",
  },
  {
    id: 8,
    moradorNome: "Juliana Ferreira",
    idMorador: "8",
    bloco: "D",
    apartamento: "408",
    dataChegada: new Date("2024-08-21 15:40"),
    tipo: "7",
    detalhes: "Pacote da Netshoes",
    status: "retirado",
  },
  {
    id: 9,
    moradorNome: "Bruno Rocha",
    idMorador: "9",
    bloco: "A",
    apartamento: "109",
    dataChegada: new Date("2024-08-21 16:05"),
    tipo: "7",
    detalhes: "Pacote da Netshoes",
    status: "retirado",
  },
  {
    id: 10,
    moradorNome: "Patrícia Ribeiro",
    idMorador: "10",
    bloco: "B",
    apartamento: "210",
    dataChegada: new Date("2024-08-21 17:20"),
    tipo: "2",
    detalhes: "Pacote do MercadoLivre",
    status: "rejeitado",
  },
];

export default function Estoque() {
  const data = encomendas;

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Encomendas</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DialogNewTransaction />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
