"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PencilIcon, PackageCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Encomenda = {
  id: number;
  moradorNome: string;
  bloco: string;
  apartamento: number;
  dataHoraChegada: string;
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
    accessorKey: "dataHoraChegada",
    header: "Data Chegada",
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
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      {row.getValue("moradorNome")}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Tooltip>
            </TooltipProvider>
          </Dialog>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <PackageCheckIcon className="h-4 w-4 text-green-700" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Entregar</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
  },
];
