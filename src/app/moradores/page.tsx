"use client";

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
import { columns } from "./columns";
import { Bloco } from "@/types/bloco";
import { Morador } from "@/types/morador";
import { useMoradoresData } from "@/hooks/use-moradores-data";
import { useBlocosData } from "@/hooks/use-blocos-data";

export default function Moradores() {
  const { data: moradoresData, isLoading } = useMoradoresData();
  const { data: blocosData } = useBlocosData();

  const moradoresComSiglaBloco = moradoresData?.map(
    (morador: Morador) => {
      const bloco = blocosData?.find(
        (b: Bloco) => b.id == morador.idBloco.toString()
      );
      return {
        ...morador,
        bloco: bloco ? bloco?.sigla : "",
      };
    }
  );

  if (isLoading) {
    return <div>Carregando...</div>;
  }

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
      <DataTable columns={columns} data={moradoresComSiglaBloco || []} />
    </div>
  );
}
