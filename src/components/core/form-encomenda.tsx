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
import { moradores } from "@/app/moradores/page";
import { Encomenda } from "@/app/encomendas/columns";

type EncomendaProps = {
  encomenda: Encomenda;
};

const formSchema = z.object({
  bloco: z.string(),
  apartamento: z.number().min(21, "Mínimo AP 21").max(196, "Máximo AP 196"),
  idMorador: z.number(),
  status: z.string(), // select
  date: z.date(),
  detalhes: z.string(),
  tipo: z.string(),
});

const tipoOptions = [
  { id: 1, value: "1", text: "Amazon" },
  { id: 2, value: "2", text: "MercadoLivre" },
  { id: 3, value: "3", text: "Shopee" },
  { id: 4, value: "4", text: "AliExpress" },
  { id: 5, value: "5", text: "Correios" },
];

export default function FormEncomenda(props: EncomendaProps) {
  const [datePopover, setDatePopover] = React.useState<boolean>(false); // estado do date popover

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bloco: props?.encomenda?.bloco || "",
      apartamento: props?.encomenda?.apartamento || undefined,
      idMorador: props?.encomenda?.id || undefined,
      status: props?.encomenda?.status || "pendente",
      date: props?.encomenda?.dataHoraChegada || undefined,
      detalhes: props?.encomenda?.detalhes || "",
    },
  });

  const { watch } = form;

  const blocoValue = watch("bloco");
  const apartamentoValue = watch("apartamento");
  const dateValue = watch("date");
  const moradorValue = watch("idMorador");

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formatData = {
      ...values,
      date: format(values.date, "dd/MM/yyyy"),
    };
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(formatData);
  }

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
                disabled={!blocoValue}
                control={form.control}
                name="apartamento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apartamento</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(
                            value === "" ? undefined : parseInt(value, 10)
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data</FormLabel>
                <Popover open={datePopover} onOpenChange={setDatePopover}>
                  <PopoverTrigger disabled={!apartamentoValue} asChild>
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
                          <span>Escolha uma data</span>
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
            name="idMorador"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Morador</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field?.value?.toString()}
                  disabled={!dateValue}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um morador" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {moradores.map((morador) => (
                      <SelectItem
                        key={morador.id}
                        value={morador.id.toString()}
                      >
                        {`${morador.nome} - ${morador.apartamento}${morador.bloco}`}
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
            name="tipo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field?.value?.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {tipoOptions.map((tipo) => (
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
            name="detalhes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Detalhes</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Insira a descrição do pacote"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-2 justify-end pt-7">
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </Form>
  );
}
