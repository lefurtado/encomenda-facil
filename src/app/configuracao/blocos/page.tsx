import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ConfiguracaoBlocos() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Configuração</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Blocos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Configuração de Blocos</CardTitle>
            <CardDescription>
              Gerencie os blocos do condomínio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Aqui você poderá adicionar, editar ou remover blocos do condomínio,
              definir siglas e nomes dos blocos.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 