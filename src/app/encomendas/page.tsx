"use client";

import { columns } from "./columns";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DataTable } from "@/components/ui/data-table";
import DialogNewEncomenda from "@/components/core/dialog-new-encomenda";
import { Encomenda } from "@/types/encomenda";
import { Bloco } from "@/types/bloco";
import { Morador } from "@/types/morador";
import { Tipo } from "@/types/tipo";
import { useEncomendasData } from "@/hooks/use-encomendas-data";
import { useBlocosData } from "@/hooks/use-blocos-data";
import { useMoradoresData } from "@/hooks/use-moradores-data";
import { useTiposData } from "@/hooks/use-tipos-data";

export default function Estoque() {
  const { data: encomendaData, isLoading } = useEncomendasData();
  const { data: blocosData } = useBlocosData();
  const { data: moradoresData } = useMoradoresData();
  const { data: tiposData } = useTiposData();

  const encomendas = encomendaData?.map((encomenda: Encomenda) => {
    const bloco = blocosData?.find(
      (bloco: Bloco) => bloco.id == encomenda.idBloco.toString()
    );
    const morador = moradoresData?.find(
      (morador: Morador) => morador.id == encomenda.idMorador.toString()
    );
    const tipo = tiposData?.find(
      (tipo: Tipo) => tipo.id == encomenda.idTipo.toString()
    );
    return {
      ...encomenda,
      bloco: bloco ? bloco?.sigla : "",
      moradorNome: morador ? morador?.nome : "",
      tipo: tipo ? tipo?.text : "",
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
            <BreadcrumbPage>Encomendas</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DialogNewEncomenda />
      <DataTable columns={columns} data={encomendas || []} />
    </div>
  );
}
