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
import { useQuery } from "react-query";
import { getMoradores } from "@/services/moradores";
import { getBlocos } from "@/services/blocos";

export default function Moradores() {
  const { data: moradoresData, isLoading } = useQuery({
    queryFn: async () => await getMoradores(),
    queryKey: ["moradores"],
    refetchOnWindowFocus: false,
  });

  const { data: blocosData } = useQuery({
    queryFn: async () => await getBlocos(),
    queryKey: ["blocos"],
    refetchOnWindowFocus: false,
  });

  const moradoresComSiglaBloco = moradoresData?.data?.map((morador) => {
    const bloco = blocosData?.data?.find((b) => b.id == morador.idBloco);
    return {
      ...morador,
      bloco: bloco ? bloco?.sigla : "",
    };
  });

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
