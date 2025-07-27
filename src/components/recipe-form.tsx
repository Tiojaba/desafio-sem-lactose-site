"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  ingredients: z.string().min(3, { message: "Por favor, insira pelo menos um ingrediente." }),
  dietaryRestrictions: z.string().optional(),
});

type RecipeFormValues = z.infer<typeof formSchema>;

interface RecipeFormProps {
  onSubmit: (data: RecipeFormValues) => void;
  isLoading: boolean;
}

export default function RecipeForm({ onSubmit, isLoading }: RecipeFormProps) {
  const form = useForm<RecipeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: "",
      dietaryRestrictions: "none",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-headline text-primary">Ingredientes</FormLabel>
               <FormDescription className="text-foreground/70 pb-2">
                Liste os ingredientes que você tem, separados por vírgula.
              </FormDescription>
              <FormControl>
                <Textarea
                  placeholder="Ex: tomate, queijo, manjericão, frango"
                  className="resize-none bg-background/50 border-primary/50 focus-visible:ring-accent"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dietaryRestrictions"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-headline text-primary">Restrições Alimentares (Opcional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background/50 border-primary/50 focus:ring-accent">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-popover">
                  <SelectItem value="none">Nenhuma</SelectItem>
                  <SelectItem value="vegetariano">Vegetariano</SelectItem>
                  <SelectItem value="vegano">Vegano</SelectItem>
                  <SelectItem value="sem glúten">Sem Glúten</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 rounded-lg transition-transform active:scale-95">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              Sugerindo...
            </>
          ) : (
            "Sugerir Receitas"
          )}
        </Button>
      </form>
    </Form>
  );
}
