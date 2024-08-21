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
    bloco: "A",
    apartamento: 101,
    dataHoraChegada: "2024-08-20 14:30",
    detalhes: "Pacote da Amazon",
    status: "rejeitado",
  },
  {
    id: 2,
    moradorNome: "Maria Oliveira",
    bloco: "B",
    apartamento: 202,
    dataHoraChegada: "2024-08-20 15:00",
    detalhes: "Caixa do Mercado Livre",
    status: "retirado",
  },
  {
    id: 3,
    moradorNome: "Carlos Pereira",
    bloco: "C",
    apartamento: 303,
    dataHoraChegada: "2024-08-21 09:45",
    detalhes: "Envelope dos Correios",
    status: "pendente",
  },
  {
    id: 4,
    moradorNome: "Ana Costa",
    bloco: "D",
    apartamento: 404,
    dataHoraChegada: "2024-08-21 11:20",
    detalhes: "Pacote do AliExpress",
    status: "retirado",
  },
  {
    id: 5,
    moradorNome: "Pedro Almeida",
    bloco: "A",
    apartamento: 105,
    dataHoraChegada: "2024-08-21 12:15",
    detalhes: "Caixa da Shopee",
    status: "pendente",
  },
  {
    id: 6,
    moradorNome: "Fernanda Lima",
    bloco: "B",
    apartamento: 206,
    dataHoraChegada: "2024-08-21 13:10",
    detalhes: "Envelope com documentos",
    status: "retirado",
  },
  {
    id: 7,
    moradorNome: "Lucas Souza",
    bloco: "C",
    apartamento: 307,
    dataHoraChegada: "2024-08-21 14:25",
    detalhes: "Pacote do Submarino",
    status: "pendente",
  },
  {
    id: 8,
    moradorNome: "Juliana Ferreira",
    bloco: "D",
    apartamento: 408,
    dataHoraChegada: "2024-08-21 15:40",
    detalhes: "Pacote da Netshoes",
    status: "retirado",
  },
  {
    id: 9,
    moradorNome: "Bruno Rocha",
    bloco: "A",
    apartamento: 109,
    dataHoraChegada: "2024-08-21 16:05",
    detalhes: "Pacote da Saraiva",
    status: "retirado",
  },
  {
    id: 10,
    moradorNome: "Patrícia Ribeiro",
    bloco: "B",
    apartamento: 210,
    dataHoraChegada: "2024-08-21 17:20",
    detalhes: "Pacote de presente",
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
