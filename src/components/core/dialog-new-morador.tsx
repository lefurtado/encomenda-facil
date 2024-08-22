import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import FormMorador from "./form-morador";

export default function DialogNewMorador() {
  return (
    <div className="flex flex-col sm:items-center sm:flex-row justify-between mb-4">
      <h2 className="mt-5 text-4xl font-semibold">Moradores</h2>
      <Dialog>
        <Button asChild>
          <DialogTrigger>
            <PlusIcon className="mr-2 h-4 w-4" />
            Registrar Morador
          </DialogTrigger>
        </Button>
        <DialogContent className="sm:max-w-[425px] max-w-xs rounded-xl">
          <DialogHeader>
            <DialogTitle>Adicionar Morador</DialogTitle>
            <DialogDescription>
              Formulário para adicionar novo morador
            </DialogDescription>
          </DialogHeader>
          <FormMorador />
        </DialogContent>
      </Dialog>
    </div>
  )
}