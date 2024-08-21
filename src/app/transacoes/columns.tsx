"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TrashIcon, InfoIcon, PencilIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transaction = {
  id: number;
  situation: "completa" | "pendente" | "cancelada";
  date: string;
  description: string;
  category: string;
  account: string;
  amount: number;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "situation",
    header: "Situação",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          {row.getValue("situation") === "completa" && (
            <Badge className="bg-green-500 hover:bg-green-500/80">
              Completa
            </Badge>
          )}
          {row.getValue("situation") === "pendente" && (
            <Badge variant="destructive">Pendente</Badge>
          )}
          {row.getValue("situation") === "cancelada" && (
            <Badge variant="outline">Cancelada</Badge>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "description",
    header: "Descrição",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "account",
    header: "Conta",
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center">Ações</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Dialog>
            <Button variant="ghost" size="icon" asChild>
              <DialogTrigger>
                <PencilIcon className="h-4 w-4 text-green-600" />
              </DialogTrigger>
            </Button>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  {row.getValue("description")}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="ghost" size="icon">
            <InfoIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <TrashIcon className="h-4 w-4 text-red-600" />
          </Button>
        </div>
      );
    },
  },
];
