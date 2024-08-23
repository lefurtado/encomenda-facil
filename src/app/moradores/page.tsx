import DialogNewMorador from "@/components/core/dialog-new-morador";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DataTable } from "@/components/ui/data-table";
import { columns, Morador } from "./columns";

export const moradores: Morador[] = [
  {
    id: 1,
    nome: "João Silva",
    telefone: "(11) 91234-5678",
    email: "joao.silva@example.com",
    bloco: "A",
    apartamento: 101,
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    telefone: "(11) 92345-6789",
    email: "maria.oliveira@example.com",
    bloco: "B",
    apartamento: 202,
  },
  {
    id: 3,
    nome: "Carlos Pereira",
    telefone: "(11) 93456-7890",
    email: "carlos.pereira@example.com",
    bloco: "C",
    apartamento: 303,
  },
  {
    id: 4,
    nome: "Ana Costa",
    telefone: "(11) 94567-8901",
    email: "ana.costa@example.com",
    bloco: "D",
    apartamento: 404,
  },
  {
    id: 5,
    nome: "Pedro Almeida",
    telefone: "(11) 95678-9012",
    email: "pedro.almeida@example.com",
    bloco: "A",
    apartamento: 105,
  },
  {
    id: 6,
    nome: "Fernanda Lima",
    telefone: "(11) 96789-0123",
    email: "fernanda.lima@example.com",
    bloco: "B",
    apartamento: 206,
  },
  {
    id: 7,
    nome: "Lucas Souza",
    telefone: "(11) 97890-1234",
    email: "lucas.souza@example.com",
    bloco: "C",
    apartamento: 307,
  },
  {
    id: 8,
    nome: "Juliana Ferreira",
    telefone: "(11) 98901-2345",
    email: "juliana.ferreira@example.com",
    bloco: "D",
    apartamento: 408,
  },
  {
    id: 9,
    nome: "Bruno Rocha",
    telefone: "(11) 99012-3456",
    email: "bruno.rocha@example.com",
    bloco: "A",
    apartamento: 109,
  },
  {
    id: 10,
    nome: "Patrícia Ribeiro",
    telefone: "(11) 90123-4567",
    email: "patricia.ribeiro@example.com",
    bloco: "B",
    apartamento: 210,
  },
];

export default function Moradores() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Moradores</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DialogNewMorador />
      <DataTable columns={columns} data={moradores} />
    </div>
  );
}
