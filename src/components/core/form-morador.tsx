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
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import InputMask from "react-input-mask";
import { Morador } from "@/app/moradores/columns";

type MoradorProps = {
  morador?: Morador;
};

export const blocosOptions = [
  { value: 1, text: "Ares", sigla: "A" },
  { value: 2, text: "Brisas", sigla: "B" },
  { value: 3, text: "Caminhos", sigla: "C" },
  { value: 4, text: "Destinos", sigla: "D" },
];

const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("Email inválido"),
  bloco: z.string().min(1, "Bloco é obrigatório"),
  apartamento: z.string().min(1, "Número do apartamento deve ser maior que 0"),
});

export default function FormMorador(props: MoradorProps) {
  const existeProps = props.morador; // verifica se o valor vem via props para modificar o botao

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: props?.morador?.nome || "",
      telefone: props?.morador?.telefone || "",
      email: props?.morador?.email || "",
      bloco: props?.morador?.bloco || "",
      apartamento: props?.morador?.apartamento || undefined,
    },
  });

  const { watch } = form;

  const nomeValue = watch("nome");

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <InputMask
                    mask="(99) 99999-9999"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  >
                    {() => <Input />}
                  </InputMask>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                control={form.control}
                name="apartamento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apartamento</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-end pt-7">
          {existeProps ? (
            <Button className="bg-blue-600 hover:bg-blue-700" type="submit">
              Salvar
            </Button>
          ) : (
            <Button type="submit">Cadastrar</Button>
          )}
        </div>
      </form>
    </Form>
  );
}
