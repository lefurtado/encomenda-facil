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
import { useQuery } from "react-query";
import { getEncomendas } from "@/services/encomendas";
import { getBlocos } from "@/services/blocos";
import { Encomenda } from "@/types/encomenda";
import { Bloco } from "@/types/bloco";
import { getMoradores } from "@/services/moradores";
import { Morador } from "@/types/morador";
import { getTipos } from "@/services/tipos";
import { Tipo } from "@/types/tipo";

export default function Estoque() {
  const { data: encomendaData, isLoading } = useQuery({
    queryKey: ["encomendas"],
    queryFn: async () => await getEncomendas(),
    refetchOnWindowFocus: false,
  });

  const { data: blocosData } = useQuery({
    queryFn: async () => await getBlocos(),
    queryKey: ["blocos"],
    refetchOnWindowFocus: false,
  });

  const { data: moradoresData } = useQuery({
    queryFn: async () => await getMoradores(),
    queryKey: ["moradores"],
    refetchOnWindowFocus: false,
  });

  const { data: tiposData } = useQuery({
    queryFn: async () => await getTipos(),
    queryKey: ["tipos"],
    refetchOnWindowFocus: false,
  });

  const encomendas = encomendaData?.data?.map((encomenda: Encomenda) => {
    const bloco = blocosData?.data?.find(
      (bloco: Bloco) => bloco.id == encomenda.idBloco.toString()
    );
    const morador = moradoresData?.data?.find(
      (morador: Morador) => morador.id == encomenda.idMorador.toString()
    );
    const tipo = tiposData?.data?.find(
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

  console.log(encomendas)

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
