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

export default function Moradores() {
  const { data: moradoresData, isLoading } = useQuery({
    queryFn: async () => await getMoradores(),
    queryKey: ["moradores"],
    refetchOnWindowFocus: false,
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
      <DataTable columns={columns} data={moradoresData?.data || []} />
    </div>
  );
}
