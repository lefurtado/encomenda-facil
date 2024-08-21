import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FormTransaction from "./form-transaction";

export default function DialogNewTransaction() {
  return (
    <div className="flex flex-col sm:items-center sm:flex-row justify-between mb-4">
      <h2 className="mt-5 text-4xl font-semibold">Encomendas</h2>
      <Dialog>
        <Button asChild>
          <DialogTrigger>
            <PlusIcon className="mr-2 h-4 w-4" />
            Registrar Encomenda
          </DialogTrigger>
        </Button>
        <DialogContent className="sm:max-w-[425px] max-w-xs rounded-xl">
          <DialogHeader>
            <DialogTitle>Adicionar encomenda</DialogTitle>
            <DialogDescription>
              Formulário para adicionar nova encomenda
            </DialogDescription>
          </DialogHeader>
          <FormTransaction />
        </DialogContent>
      </Dialog>
    </div>
  );
}
