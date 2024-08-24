"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PencilIcon, PackageCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FormEncomenda from "@/components/core/form-encomenda";
import FormEntrega from "@/components/core/form-entrega";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Encomenda = {
  id: number;
  moradorNome: string;
  idMorador: string;
  bloco: string;
  apartamento: string;
  dataChegada: Date;
  tipo: string;
  detalhes: string;
  status: "retirado" | "pendente" | "rejeitado";
};

export const columns: ColumnDef<Encomenda>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "moradorNome",
    header: "Nome",
  },
  {
    accessorKey: "bloco",
    header: "Bloco",
  },
  {
    accessorKey: "apartamento",
    header: "Apartamento",
  },
  {
    accessorKey: "dataChegada",
    header: "Data Chegada",
    cell: ({ row }) => {
      const dataChegada = row.getValue("dataChegada") as Date;
      return <div>{dataChegada.toLocaleDateString("pt-BR")}</div>;
    },
  },
  {
    accessorKey: "detalhes",
    header: "Detalhes",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          {row.getValue("status") === "retirado" && (
            <Badge className="bg-green-500 hover:bg-green-500/80">
              Retirado
            </Badge>
          )}
          {row.getValue("status") === "pendente" && (
            <Badge variant="outline">Pendente</Badge>
          )}
          {row.getValue("status") === "rejeitado" && (
            <Badge variant="destructive">Rejeitado</Badge>
          )}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center">Ações</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Dialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <DialogTrigger>
                      <PencilIcon className="h-4 w-4 text-blue-700" />
                    </DialogTrigger>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Editar</p>
                </TooltipContent>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Editar encomenda</DialogTitle>
                    <DialogDescription>
                      Formulário para editar encomenda
                    </DialogDescription>
                  </DialogHeader>
                  <FormEncomenda encomenda={row.original} />
                </DialogContent>
              </Tooltip>
            </TooltipProvider>
          </Dialog>
          <Dialog>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <DialogTrigger>
                      <PackageCheckIcon className="h-4 w-4 text-green-700" />
                    </DialogTrigger>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Entregar</p>
                </TooltipContent>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Entregar encomenda</DialogTitle>
                    <DialogDescription>
                      Formulário para entregar encomenda
                    </DialogDescription>
                  </DialogHeader>
                  <FormEntrega encomenda={row.original} />
                </DialogContent>
              </Tooltip>
            </TooltipProvider>
          </Dialog>
        </div>
      );
    },
  },
];
