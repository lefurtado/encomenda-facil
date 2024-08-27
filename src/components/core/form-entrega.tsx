"use client";

import * as React from "react";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ptBR } from "date-fns/locale";
import { blocosOptions } from "./form-morador";
import { Encomenda } from "@/types/encomenda";
import { useQuery } from "react-query";
import { getTipos } from "@/services/tipos";
import { Tipo } from "@/types/tipo";

type EntregaProps = {
  encomenda?: Encomenda;
};

const formSchema = z.object({
  bloco: z.string(),
  apartamento: z.string(),
  status: z.string(), // select
  dataEntrega: z.date(),
  detalhesRetirada: z.string(),
  tipo: z.string(),
});

export default function FormEntrega(props: EntregaProps) {
  const [datePopover, setDatePopover] = React.useState<boolean>(false); // estado do date popover

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bloco: props?.encomenda?.bloco || "",
      apartamento: props?.encomenda?.apartamento || "",
      tipo: props?.encomenda?.tipo || "",
      status: "retirado",
      dataEntrega: undefined,
      detalhesRetirada: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formatData = {
      ...values,
      dataEntrega: format(values.dataEntrega, "dd/MM/yyyy"),
    };
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(formatData);
  }

  const { data: tiposData } = useQuery({
    queryFn: async () => await getTipos(),
    queryKey: ["tipos"],
    refetchOnWindowFocus: false,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <div className="w-full">
              <FormField
                control={form.control}
                name="bloco"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bloco</FormLabel>
                    <Select
                      disabled
                      onValueChange={field.onChange}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um bloco" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {blocosOptions.map((item) => (
                          <SelectItem
                            key={item.value}
                            value={item.sigla.toString()}
                          >
                            {item.text}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="apartamento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apartamento</FormLabel>
                    <FormControl>
                      <Input disabled defaultValue={field.value} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="tipo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo</FormLabel>
                <Select
                  disabled
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {tiposData?.data?.map((tipo: Tipo) => (
                      <SelectItem key={tipo.id} value={tipo.value}>
                        {tipo.text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dataEntrega"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data da Retirada</FormLabel>
                <Popover open={datePopover} onOpenChange={setDatePopover}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                        onClick={() => setDatePopover(true)}
                      >
                        {field.value ? (
                          format(field.value, "P", { locale: ptBR })
                        ) : (
                          <span>Escolha a data da retirada</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date); // Armazena a data como objeto Date
                        setDatePopover(false); // Fecha o popover
                      }}
                      initialFocus
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detalhesRetirada"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Detalhes da Retirada</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Insira o nome completo de quem retirou"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 justify-end pt-7">
          <Button className="bg-green-600 hover:bg-green-700" type="submit">
            Entregar
          </Button>
        </div>
      </form>
    </Form>
  );
}
